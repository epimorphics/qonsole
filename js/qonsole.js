var qonsole = function() {
  "use strict";

  /** The loaded configuration */
  var _config = {};
  var _defaults = {};
  var _current_query = null;
  var _query_editor = null;

  var init = function() {
    $(".sidebar-nav .btn-group").each( function(i,b) {$(b).button();} );
    $("#layout-options .btn").click( onSelectLayout );
    $("#queries").click( "input", function( e ) {selectQuery( e.target );} );
    $("#prefixes").click( "input", addOrRemovePrefix );
    $("#query-chrome2 a").click( runQuery );

    loadConfig();
  };

  /** Return the DOM node representing the query editor */
  var queryEditor = function() {
    if (!_query_editor) {
      _query_editor = CodeMirror( $("#query-edit-cm").get(0), {
        lineNumbers: true,
        mode: "sparql"
      } );
    }
    // return $("#query-edit textarea").get( 0 );
    return _query_editor;
  };

  /** Return the configuration of the currently selected example query */
  var currentQueryConfig = function() {
    return _current_query;
  };

  /** Return the current value of the query edit area */
  var currentQueryText = function() {
    return queryEditor().getValue();
  };

  /** Set the value of the query edit area */
  var setCurrentQueryText = function( text ) {
    queryEditor().setValue( text );
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
    if (currentQueryConfig() && currentQueryConfig().prefixes) {
      $.each( currentQueryConfig().prefixes, function( k, v ) {loadPrefix( k, v )} );
    }
  };

  var loadPrefix = function( prefix, uri ) {
    var html = sprintf( "<li><label><input type='checkbox' checked='true' value='%s'></input> %s:</label></li>", uri, prefix );
    $("#prefixes").append( html );
  }

  var addOrRemovePrefix = function( e ) {
    var elt = $(e.target);
    var prefix = elt.parent().text().trim().replace( /:/, "" );
    var uri = elt.attr("value");

    addPrefixDeclaration( prefix, uri, elt.is( ":checked" ) );
  };

  var addPrefixDeclaration = function( pref, uri, add ) {
    var query = currentQueryText();
    var lines = query.split( "\n" );
    var pattern = new RegExp( "^prefix +" + pref + ":");
    var found = false;

    for (var i = 0; !found && i < lines.length; i++) {
      found = lines[i].match( pattern );
      if (found && !add) {
        lines.splice( i, 1 );
      }
    }

    if (!found && add) {
      for (var i = 0; i < lines.length; i++) {
        if (!lines[i].match( /^prefix/ )) {
          lines.splice( i, 0, sprintf( "prefix %s: <%s>", pref, uri ) );
          break;
        }
      }
    }

    setCurrentQueryText( lines.join( "\n" ) );
  };

  var renderAllPrefixes = function() {
    var d = "";

    $("#prefixes input:checked" ).each( function( i, elt ) {
      d = d + sprintf( "prefix %s <%s>\n", $(elt).parent().text().trim(), $(elt).attr("value") );
    } );

    return d;
  };

  var loadQuery = function() {
    var q = renderAllPrefixes() + "\n";

    setCurrentQueryText( q + currentQueryConfig().query );
    $("#query-chrome1 span").html( sprintf( "<em>%s</em>", currentQueryConfig().desc ));
    $("#query-chrome2 input").val( endpointURL() );
  };

  var endpointURL = function() {
    var ep = null;
    if (currentQueryConfig()) {
      ep = currentQueryConfig().endpoint;
    }

    ep = ep || (_defaults && _defaults.endpoint);
    ep = ep || "/sparql";

    return ep;
  };

  var runQuery = function( e ) {
    e.preventDefault();

    var url = $("#query-chrome2 input").val();
    var query = currentQueryText();
    var format = selectedFormat();
    var options = {
      data: {query: query, output: format},
      success: onQuerySuccess,
      failure: onQueryFail
    };

    // hack TODO remove
    if (selectedFormat() === "xml"){
      options.data["force-accept"] = "text/plain";
    }

    $.ajax( url, options );
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
        showPlainTextResult( data );
        break;
      case "xml":
        showPlainTextResult( data );
        break;
      case "tsv":
        showTableResult( data );
        break;
    }
  };

  var showPlainTextResult = function( data ) {
    var lineLength = 100;
    var k = 0;

    for (var i = 0; i < 100; i++) {
      var nextNewline = data.indexOf( "\n", k );
      if (nextNewline < 0) {
        break;
      }
      else {
        if ((nextNewline - k) > lineLength) {
          lineLength = nextNewline - k;
        }

        k = nextNewline + 1;
      }
    }


    $( "#results" ).html( sprintf( "<pre class='span12 results-plain' style='min-width: %dpx'></pre>", lineLength * 8 ));
    $( "#results pre.results-plain" ).text( data );
  };

  var showTableResult = function( data ) {
    var lines = data.split( "\n" );

    var data = new google.visualization.DataTable();
    $.each( lines.shift().split("\t"), function(i, c ) {data.addColumn('string', c);} );

    $.each( lines, function( i, l ) {
      if (l && l !== "") {
        var d = [];
        $.each( l.split( "\t" ), function( i, v ) {d.push( v.slice( 1, -1 ));} );
        data.addRows( [d] );
      }
    } );

    $("#results").empty();
    var table = new google.visualization.Table(document.getElementById('results'));
    table.draw(data, {
      showRowNumber: true,
      page: "enable",
      pageSize: 25,
      alternatingRowStyle: true
    });

  };

  return {
    init: init
  }
}();

$(function() {qonsole.init();});

