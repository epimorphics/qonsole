var qonsole = function() {
  "use strict";

  /** The loaded configuration */
  var _config = {};
  var _defaults = {};
  var _current_query = null;

  var init = function() {
    $(".sidebar-nav .btn-group").each( function(i,b) {$(b).button();} );
    $("#layout-options .btn").click( onSelectLayout );
    $("#queries").click( "input", function( e ) {selectQuery( e.target );} );
    $("#prefixes").click( renderPrefixes );
    $("#query-chrome2 a").click( runQuery );

    loadConfig();
  };

  /** User has selected a different layout of the main query area */
  var onSelectLayout = function( e ) {
    e.preventDefault();
    if ($(e.target).attr("data-layout") === "vertical") {
      $("#query-block").removeClass("span6").addClass("span12");
      $("#results-block").removeClass("span6").addClass("row-fluid");
      $("#results-block > div").addClass( "span12" );
    }
    else {
      $("#query-block").removeClass("span12").addClass("span6");
      $("#results-block").removeClass("row-fluid").addClass("span6");
      $("#results-block > div").removeClass( "span12" );
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
      var html = sprintf( "<label class='radio'><input type='radio' value='%s' name='query' title='%s' data-query-id='%s'/>%s</label>",
                          c.name, c.desc, i, c.summary );
      $("#queries").append( html );
    } );

    selectQuery( $("#queries").find( "input" )[0] );
  };

  var selectQuery = function( elt ) {
    var queryId = $(elt).attr( "data-query-id" ) || $(elt).find("[data-query-id]").first().attr( "data-query-id");
    _current_query = _config[queryId];

    $($("#queries").find( "input" )[queryId]).attr( "checked", true );
    loadPrefixes( queryId );
    loadQuery( queryId );
  };

  var loadPrefixes = function( queryId ) {
    $("#prefixes").empty();
    if (_defaults && _defaults.prefixes) {
      $.each( _defaults.prefixes, function( k, v ) {loadPrefix( k, v )} );
    }
    if (_current_query && _current_query.prefixes) {
      $.each( _current_query.prefixes, function( k, v ) {loadPrefix( k, v )} );
    }

    renderPrefixes();
  };

  var loadPrefix = function( prefix, uri ) {
    var html = sprintf( "<li><label><input type='checkbox' checked='true' value='%s'></input> %s:</label></li>", uri, prefix );
    $("#prefixes").append( html );
  }

  var renderPrefixes = function() {
    var d = "";

    $("#prefixes input:checked" ).each( function( i, elt ) {
      d = d + sprintf( "prefix %s <%s>\n", $(elt).parent().text(), $(elt).attr("value") );
    } );

    $("#prefix-decl textarea").val( d );
  };

  var loadQuery = function() {
    $("#query-edit textarea").val( _current_query.query );
    $("#query-chrome1 span").html( sprintf( "<em>%s</em>", _current_query.desc ));
    $("#query-chrome2 input").val( endpointURL() );
  };

  var endpointURL = function() {
    var ep = null;
    if (_current_query) {
      ep = _current_query.endpoint;
    }

    ep = ep || (_defaults && _defaults.endpoint);
    ep = ep || "/sparql";

    return ep;
  };

  var runQuery = function( e ) {
    e.preventDefault();

    var url = $("#query-chrome2 input").val();
    var query = $("#prefix-decl textarea").val() + $("#query-edit textarea").val();
    var format = selectedFormat();

    $.ajax( url, {
      data: {query: query, output: format},
      success: onQuerySuccess,
      failure: onQueryFail
    } );
  };

  var selectedFormat = function() {
    return $("#format-choice button.active" ).attr( "data-format" );
  };

  var onQueryFail = function() {
    alert( "query fail" );
  };

  var onQuerySuccess = function( data ) {
    switch (selectedFormat()) {
      case "text":
        showPlainTextResult( data );
        break;
      case "json":
        break;
      case "xml":
        break;
      case "table":
        break;
    }
  };

  var showPlainTextResult = function( data ) {
    var lineLength = data.indexOf( "\n" );
    $( "#results" ).html( sprintf( "<pre class='span12 results-plain' style='min-width: %dpx'></pre>", lineLength * 8 ));
    $( "#results pre.results-plain" ).text( data );
  };

  return {
    init: init
  }
}();

$(function() {qonsole.init();});

