require 'rake'
require 'open3'
require 'timeout'
require 'net/http'

desc 'Start a local Rack server (rackup) to serve Qonsole'
task :serve do
  port = ENV.fetch('PORT', '8080')
  sh "bundle exec rackup -p #{port}"
end

desc 'Run integration tests (starts server, runs tests, then stops)'
task :test_integration do
  port = ENV.fetch('PORT', '8080')
  server_cmd = ['bundle', 'exec', 'rackup', '-p', port]
  puts "Starting Rack server on http://localhost:#{port} ..."

  # Start server in the background
  rd, wr = IO.pipe
  pid = Process.spawn({ 'RACK_ENV' => 'test' }, *server_cmd, out: wr, err: wr, chdir: Dir.pwd)
  wr.close

  begin
    # Wait for server to boot
    booted = false
    Timeout.timeout(15) do
      until booted
        sleep 0.5
        # naive readiness check
        begin
          res = Net::HTTP.get_response(URI("http://localhost:#{port}/demo-vertical.html"))
          booted = res.is_a?(Net::HTTPSuccess) || res.is_a?(Net::HTTPRedirection) || res.is_a?(Net::HTTPNotFound)
        rescue StandardError
          # keep retrying
        end
      end
    end
  rescue Timeout::Error
    puts 'Server failed to start within 15s. Output:'
    puts rd.read
    raise
  end

  puts 'Server is up. Running tests...'
  begin
    test_page = ENV.fetch('QONSOLE_TEST_PAGE', "http://localhost:#{port}/demo-vertical.html")
    sh({ 'QONSOLE_TEST_PAGE' => test_page }, 'bundle exec ruby test/integration/qonsole-test.rb')
  ensure
    puts 'Stopping server...'
    Process.kill('TERM', pid) rescue nil
    Process.wait(pid) rescue nil
  end
end
