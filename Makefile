.PHONY: help assets install server test test-integration

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

help:
	@echo "Available targets:"
	@echo "  assets            Install node/bower deps and build assets via grunt"
	@echo "  server            Start Rack server on PORT=$(PORT)"
	@echo "  test              Run integration test end-to-end (starts server)"
	@echo "  test-integration  Alias for 'test'"

# Install JS deps and build assets (copies vendor files, minifies, etc.)
assets: install
	# Use npm script to run grunt to avoid npx resolution issues
	npm run -s start

# Install node and bower dependencies
install: package.json
	$(NPM_INSTALL)
	$(BOWER) install

# Start the local Rack server (served via config.ru)
server:
	PORT=$(PORT) bundle exec rake serve

# Run the Ruby integration test suite (starts/stops server automatically)
test test-integration:
	PORT=$(PORT) QONSOLE_TEST_PAGE=$(QONSOLE_TEST_PAGE) \
		bundle exec rake test_integration

