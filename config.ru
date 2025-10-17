require 'rack'
require 'rack/utils'
require 'net/http'
require 'uri'
require 'openssl'

# Qonsole development server with a tiny SPARQL proxy
#
# Environment variables:
# - SPARQL_ENDPOINT   : Target upstream SPARQL HTTP endpoint (required)
# - PORT              : Local server port (handled by rackup -p)
# - RACK_ENV          : When 'development', proxy prefers POST
# - PROXY_ALWAYS_POST : '1' to force proxy to POST in any environment
# - PROXY_INSECURE    : '1' to disable TLS verification (local only)
# - PROXY_CA_FILE     : Path to additional CA bundle PEM
# - PROXY_CA_PATH     : Path to directory containing CA certs
# - PROXY_DEBUG       : '1' to enable proxy request/response logging

# Simple proxy app to forward SPARQL requests to a remote endpoint.
# Use to avoid CORS by calling a same-origin path: /sparql?query=...&output=...
class SparqlProxy
  def initialize(target_url)
    @target = URI(target_url)
  end

  def debug?
    ENV['PROXY_DEBUG'] == '1'
  end

  # Memoized system cert store with optional overrides
  def cert_store
    return @cert_store if defined?(@cert_store)
    store = OpenSSL::X509::Store.new
    store.set_default_paths
    ca_file = ENV['PROXY_CA_FILE']
    ca_path = ENV['PROXY_CA_PATH']
    store.add_file(ca_file) if ca_file && File.file?(ca_file)
    store.add_path(ca_path) if ca_path && Dir.exist?(ca_path)
    @cert_store = store
  end

  def build_http(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = (uri.scheme == 'https')
    http.read_timeout = 20
    http.open_timeout = 5
    if http.use_ssl?
      if ENV['PROXY_INSECURE'] == '1'
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE
        $stdout.puts "[sparql-proxy] WARNING: TLS verification disabled (PROXY_INSECURE=1)" if debug?
      else
        http.cert_store = cert_store
        http.verify_mode = OpenSSL::SSL::VERIFY_PEER
      end
    end
    http
  end

  def call(env)
    req = Rack::Request.new(env)
    return preflight if req.request_method == 'OPTIONS'

    # Debug: minimal log to STDOUT so we can see requests reaching the proxy
    $stdout.puts "[sparql-proxy] #{req.request_method} #{req.fullpath}" if debug?

    # Build target URI with original query string
    target = @target.dup
    # Only attach query for GET; for POST we'll encode as form body

  http = build_http(target)

  headers = {}
  # Parse once using URI.decode_www_form to avoid edge-case differences
  raw_pairs = URI.decode_www_form(req.query_string.to_s)
  params_h = raw_pairs.to_h
  out = (params_h['output'] || '').downcase
  headers['Accept'] = case out
            when 'json' then 'application/sparql-results+json, application/json;q=0.9, */*;q=0.1'
            when 'xml'  then 'application/sparql-results+xml, application/xml;q=0.9, */*;q=0.1'
            when 'tsv'  then 'text/tab-separated-values, text/plain;q=0.9, */*;q=0.1'
            when 'text' then 'text/plain, */*;q=0.1'
            else req.get_header('HTTP_ACCEPT') || '*/*'
            end
  headers['User-Agent'] = 'Qonsole-Proxy/1.0'

    begin
      # Local dev: always POST to improve compatibility (avoid URL length limits, upstream quirks)
      always_post = (ENV['RACK_ENV'] == 'development') || ENV['PROXY_ALWAYS_POST'] == '1'
      use_post = always_post || (req.query_string && req.query_string.length > 1800)

      method = use_post ? :post : :get
      if method == :post
        form = params_h
        res = http.post(target.path, URI.encode_www_form(form), {
          'Content-Type' => 'application/x-www-form-urlencoded'
        }.merge(headers))
      else
        target.query = URI.encode_www_form(raw_pairs)
        res = http.get(target.request_uri, headers)
      end

      # Follow up to 3 redirects
      limit = 3
      while res.is_a?(Net::HTTPRedirection) && limit > 0
        loc = URI(res['location'])
        next_uri = loc.relative? ? (URI.join(target, res['location'])) : loc
        target = next_uri
  http = build_http(target)
        if method == :post
          # Re-POST form on redirect
          form ||= params_h
          res = http.post(target.path, URI.encode_www_form(form), {
            'Content-Type' => 'application/x-www-form-urlencoded'
          }.merge(headers))
        else
          res = http.get(target.request_uri, headers)
        end
        limit -= 1
      end
      status = res.code.to_i
      body = [res.body || '']
      # Only pass through a safe subset of headers
      resp_headers = {
        'content-type' => res['content-type'] || res['Content-Type'] || 'text/plain; charset=utf-8',
        'access-control-allow-origin' => '*',
        'access-control-allow-methods' => 'GET, OPTIONS',
        'access-control-allow-headers' => 'content-type, accept'
      }
  $stdout.puts "[sparql-proxy] responding #{status} ct=#{resp_headers['content-type']} bytes=#{body[0].bytesize}" if debug?
  [status, resp_headers, body]
    rescue => e
      warn "[sparql-proxy] error: #{e.class}: #{e.message}" if debug?
      [502, { 'content-type' => 'text/plain' }, ["Proxy error: #{e.class}: #{e.message}\n"]]
    end
  end

  def preflight
    [204, {
      'access-control-allow-origin' => '*',
      'access-control-allow-methods' => 'GET, OPTIONS',
      'access-control-allow-headers' => 'content-type, accept',
      'access-control-max-age' => '600'
    }, []]
  end
end

sparql_target = ENV.fetch('SPARQL_ENDPOINT', 'https://environment.data.gov.uk/sparql/bwq/query')

static_app = Rack::Builder.new do
  use Rack::Static, urls: [
    '/css', '/js', '/img', '/bower_components', '/node_modules', '/examples'
  ], root: Dir.pwd
  run Rack::Files.new(Dir.pwd)
end

run Rack::URLMap.new(
  '/sparql' => SparqlProxy.new(sparql_target),
  '/' => static_app
)
