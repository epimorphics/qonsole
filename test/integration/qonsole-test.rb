require 'bundler'
Bundler.require

# Explicit requires for clarity with modern Capybara/Selenium setup
require 'minitest/autorun'
require 'capybara'
require 'capybara/dsl'
require 'capybara/minitest'
require 'capybara/minitest/spec'
require 'selenium-webdriver'

# You can override the test page with QONSOLE_TEST_PAGE env var
# Example:
#   QONSOLE_TEST_PAGE="http://localhost:8080/demo-vertical.html" ruby test/integration/qonsole-test.rb
DEFAULT_TEST_PAGE = 'http://localhost:8080/demo-vertical.html'

# Use headless Chrome via Selenium (capybara-webkit is deprecated)
Capybara.default_driver = :selenium_chrome_headless
Capybara.default_max_wait_time = 5

class AcceptanceSpec < Minitest::Spec
  include Capybara::DSL

  def setup
  end

  def teardown
    Capybara.reset_session!
    Capybara.use_default_driver
  end

  def test_page
    ENV["QONSOLE_TEST_PAGE"] || DEFAULT_TEST_PAGE
  end

  # Prefer the local same-origin proxy if it's available in the endpoint list
  def prefer_local_proxy
    # Wait for the endpoints select to exist
    return unless page.has_css?('select#endpoints', wait: 5)

    # If an option with value "/sparql" exists, select it
    if page.has_css?('select#endpoints option[value="/sparql"]', wait: 1)
      # Get the option's label text, then use Capybara's select by text
      label = find('select#endpoints option[value="/sparql"]', visible: :all).text
      select(label, from: 'endpoints') unless label.to_s.strip.empty?
    end
  rescue Capybara::ElementNotFound
    # Ignore silently if elements aren't present yet
  end
end

class QonsoleTest < AcceptanceSpec
  it "has a title" do
    visit(test_page)
    assert_selector('h1')
  end

  it "runs the default query" do
    visit(test_page)
    # Attempt to avoid the CORS issue by selecting the local proxy endpoint
    prefer_local_proxy
    # Initially only the header exists in the results container
    assert_selector('#results h2')
    click_link("perform query")
    # Wait for any non-header content to appear (table, pre, etc.)
    Capybara.using_wait_time(15) do
      assert_selector('#results :not(h2)', minimum: 1)
    end
  end

  it "defaults to text output when running a describe query" do
    visit( test_page )
    # Attempt to avoid the CORS issue by selecting the local proxy endpoint
    prefer_local_proxy
    sleep( 3 )

    js = <<EOS
      try {
        var q = require( "js/app/qonsole" );
        q.setCurrentQueryText( "describe <http://environment.data.gov.uk/data/bathing-water-quality/compliance/point/03600/year/2014>" );
        console.log( "CQT = " + q.currentQueryText() );
      }
      catch (e) {
        console.log( "Oh no: " + e )
      }
EOS

    page.execute_script(js)
    click_link("perform query")
    assert_no_selector("#results .text-danger")
  end
end

