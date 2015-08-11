require( "bundler" )
Bundler.require
require("minitest/autorun")

DEFAULT_TEST_PAGE = "http://localhost/~ian/qonsole/demo-vertical.html"
Capybara.default_driver = :webkit

Capybara::Webkit.configure do |config|
  config.allow_url("environment.data.gov.uk")
end

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
    visit( test_page )
    page.has_selector?( 'h1' )
  end

  it "runs the default query" do
    visit( test_page )
    not page.has_selector?( :css, ".dataTables-wrapper table" )
    page.click_link( "perform query" )
    page.has_selector?( :css, ".dataTables-wrapper table" )

    number_of_results = page.find( ".timeTaken" ).text.to_i
    (number_of_results >= 23 ).must_equal( true )
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
    page.click_link( "perform query" )

    results_text = page.find( "#results .text-danger" ).text
    results_text.wont_match( /Error.*/ )
  end
end

