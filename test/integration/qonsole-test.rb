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
end

class QonsoleTest < AcceptanceSpec
  it "has a title" do
    visit(test_page)
    assert_selector('h1')
  end

  it "runs the default query" do
    visit(test_page)
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

