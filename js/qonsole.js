var qonsole = function() {
  "use strict";

  /** The loaded configuration */
  var _config = {};
  var _defaults = {};

  var init = function() {
    $(".sidebar-nav .btn-group").each( function(i,b) {$(b).button();} );
    $("#layout-options .btn").click( onSelectLayout );
    loadConfig();
  };

  /** User has selected a different layout of the main query area */
  var onSelectLayout = function( e ) {
    e.preventDefault();
    if ($(e.target).attr("data-layout") === "vertical") {
      $("#query-block").removeClass("span5").addClass("span10");
      $("#results-block").removeClass("span5").addClass("span10");
    }
    else {
      $("#query-block").removeClass("span10").addClass("span5");
      $("#results-block").removeClass("span10").addClass("span5");
    }
  };

  /** Load the configuration file with the example queries */
  var loadConfig = function() {
    $.getJSON("qonfig.json", onConfigLoaded )
     .error( onConfigFail );
  };

  /** Successfully loaded the configuration */
  var onConfigLoaded = function( data, status, jqXHR ) {
    _config = data;
    var j = -1;

    $.each( data, function( i, d ) {
      if (d.name === "default") {
        _defaults = d;
        j = i;
      }
    } );

    if (j >= 0) {
      _config.splice( _config, 1 );
    }

    showQueries();
  };

  /** Failed to load the configuration */
  var onConfigFail = function() {
    alert("Failed to load qonfig.json");
  };

  var showQueries = function( config ) {
    $.each( _config, function( i, c ) {
      var html = sprintf( "<label class='radio'><input type='radio' value='%s' name='query' title='%s' />%s</label>",
                          c.name, c.desc, c.summary );
      $("#queries").append( html );
    } );
  };

  var selectQuery = function( elt ) {

  };

  return {
    init: init
  }
}();

$(function() {qonsole.init();});

