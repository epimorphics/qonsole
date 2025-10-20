.PHONY: assets bundle help install server test-integration tests

# Prefer npx to run local tools; fall back to global if needed
BOWER := $(shell command -v npx >/dev/null 2>&1 && echo "npx bower" || echo "bower")

# Configurable ports/URLs for local server and tests
PORT ?= 8080
QONSOLE_TEST_PAGE ?= http://localhost:$(PORT)/demo-vertical.html

# Prefer npm ci on CI, otherwise npm install
ifdef CI
  NPM_INSTALL := npm ci
else
  NPM_INSTALL := npm install
endif

all: help

audit: install
	@echo "Auditing Node dependencies for vulnerabilities..."
	npm audit --json > $(date "+%Y.%m.%d-%H.%M.%S")-npm_audit.json

help:
	@echo "Available targets:"
	@echo "  assets            Install node/bower deps and build assets via grunt"
	@echo "  audit             Audit Node dependencies for vulnerabilities"
	@echo "  bundle           Install Ruby gems via Bundler"
	@echo "  install           Install Node and Bower dependencies"
	@echo "  server            Start Rack server on PORT=$(PORT)"
	@echo "  test-integration  Alias for 'tests'"
	@echo "  tests             Run integration tests end-to-end (starts server)"

# Install JS deps and build assets (copies vendor files, minifies, etc.)
assets:
	@echo "Building assets with grunt (via npm scripts)..."
# Use npm script to run grunt to avoid npx resolution issues
	npm run -s start

# Alias for bundles
bundle: bundles

# Install Ruby gems via Bundler
bundles:
	@echo "Installing Ruby gems via Bundler..."
	bundle install

# Install node and bower dependencies
install: package.json
	@echo "Installing Node and Bower dependencies..."
	$(NPM_INSTALL)
	$(BOWER) install

# Start the local Rack server (served via config.ru)
server: install assets
	@echo "Starting Rack server on PORT=$(PORT)..."
	PORT=$(PORT) bundle exec rake serve

# Run the Ruby integration test suite (starts/stops server automatically)
tests test-integration: bundle install assets
	@echo "Running integration tests against $(QONSOLE_TEST_PAGE) ..."
	PORT=$(PORT) QONSOLE_TEST_PAGE=$(QONSOLE_TEST_PAGE) \
		bundle exec rake test_integration

