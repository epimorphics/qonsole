require 'rack'

# Serve the Qonsole project as a static site from the current directory.
# This exposes assets under css/, js/, img/, bower_components/, node_modules/ etc.

use Rack::Static, urls: [
  '/css',
  '/js',
  '/img',
  '/bower_components',
  '/node_modules',
  '/examples'
], root: Dir.pwd

run Rack::Files.new(Dir.pwd)
