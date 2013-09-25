var qonsole = function() {
  "use strict";

  /** The loaded configuration */
  var _config = {};
  // var _defaults = {};
  // var _current_query = null;
  var _query_editor = null;
  var _startTime = 0;

  /** Failed to load the configuration */
  var onConfigFail = function() {
    alert("Failed to load qonfig.json");
  };

  var addOrRemovePrefix = function( e ) {
    var elt = $(e.target);
    var prefix = $.trim(elt.parent().text()).replace( /:/, "" );
    var uri = elt.attr("value");

    addPrefixDeclaration( prefix, uri, elt.is( ":checked" ) );
  };

  var isOpera = function() {return !!(window.opera && window.opera.version);};  // Opera 8.0+
  var isFirefox = function() {return testCSS('MozBoxSizing');};                 // FF 0.8+
  var isSafari = function() {return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;};    // At least Safari 3+: "[object HTMLElementConstructor]"
  var isChrome = function() {return !isSafari() && testCSS('WebkitTransform');};  // Chrome 1+
  var isIE = function() {return /*@cc_on!@*/false || testCSS('msTransform');};  // At least IE6

  var testCSS =  function(prop) {
      return prop in document.documentElement.style;
  }

  /* ---- new ---- */

  /** Initialisation - only called once */
  var init = function( config ) {
    // $(".sidebar-nav .btn-group").each( function(i,b) {$(b).button();} );
    // $("#layout-options .btn").click( onSelectLayout );
    // $("#queries").click( "input", function( e ) {selectQuery( e.target );} );
    // $("#prefixes").click( "input", addOrRemovePrefix );
    // $("#query-chrome2 a").click( runQuery );

    $(document)
      .ajaxStart(function() {
        elementVisible( ".loadingSpinner", true );
        startTimingResults();
      })
      .ajaxStop(function() {
        elementVisible( ".loadingSpinner", false );
      });

    loadConfig( config );
    bindEvents();
  };

  /** Load the configuration definition */
  var loadConfig = function( config ) {
    if (config.configURL) {
      $.getJSON( config.configURL, onConfigLoaded )
       .error( onConfigFail );
    }
    else {
      onConfigLoaded( config )
    }
  };

  /** Successfully loaded the configuration */
  var onConfigLoaded = function( config, status, jqXHR ) {
    _config = config;
    initPrefixes( config );
    initExamples( config );
    initEndpoints( config );
    initQuery( config );
  };

  /** Return the current config object */
  var config = function() {
    return _config;
  };

  /** Bind events that we want to manage */
  var bindEvents = function() {
    $("ul.prefixes").on( "click", "a", function( e ) {
      var elem = $(e.currentTarget);
      updatePrefixDeclaration( elem.text().trim(), elem.data( "uri" ), !elem.is(".active") );
    } );
    $("ul.examples").on( "click", "a", function( e ) {
      var elem = $(e.currentTarget);
      $("ul.examples a").removeClass( "active" );
      _.defer( function() {showCurrentQuery()} );
    } );
    $(".endpoints").on( "click", "a", function( e ) {
      var elem = $(e.currentTarget);
      setCurrentEndpoint( elem.text().trim() );
    } );
    $("a.run-query").on( "click", runQuery );
  };

  /** List the current defined prefixes from the config */
  var initPrefixes = function( config ) {
    var prefixAdd = $("ul.prefixes li:last" );
    $.each( config.prefixes, function( key, value ) {
      var html = sprintf( "<li><a class='btn btn-info btn-sm active' data-toggle='button' data-uri='%s'>%s</a></li>", value, key );
      $(html).insertBefore( prefixAdd);
    } );
  };

  /** List the example queries from the config */
  var initExamples = function( config ) {
    var examples = $("ul.examples");
    examples.empty();

    $.each( config.queries, function( i, queryDesc ) {
      var html = sprintf( "<li><a class='btn btn-info btn-sm' data-toggle='button'>%s</a></li>",
                          queryDesc.name );
      examples.append( html );
    } );

    examples.find("a").first().addClass( "active" );
  };

  /** Set up the drop-down list of end-points */
  var initEndpoints = function( config ) {
    var endpoints = $("ul.endpoints");
    endpoints.empty();

    $.each( config.endpoints, function( key, url ) {
      var html = sprintf( "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>%s</a></li>",
                          url );
      endpoints.append( html );
    } );

    setCurrentEndpoint( config.endpoints["default"] );
  };

  /** Set the current endpoint text */
  var setCurrentEndpoint = function( url ) {
    $("[id=sparqlEndpoint]").val( url );
  };

  /** Return the current endpoint text */
  var currentEndpoint = function( url ) {
    return $("[id=sparqlEndpoint]").val();
  };

  /** Set the initial query, which will be the default selection plus the selected prefixes */
  var initQuery = function( config ) {
    showCurrentQuery();
  };

  /** Return the query definition with the given name */
  var namedExample = function( name ) {
    return _.find( config().queries, function( ex ) {return ex.name === name;} );
  };

  /** Return the currently active named example */
  var currentNamedExample = function() {
    return namedExample( $("ul.examples a.active").first().text().trim() );
  };

  /** Return the DOM node representing the query editor */
  var queryEditor = function() {
    if (!_query_editor) {
      _query_editor = CodeMirror( $("#query-edit-cm").get(0), {
        lineNumbers: true,
        mode: "sparql"
      } );
    }
    return _query_editor;
  };

  /** Return the current value of the query edit area */
  var currentQueryText = function() {
    return queryEditor().getValue();
  };

  /** Set the value of the query edit area */
  var setCurrentQueryText = function( text ) {
    queryEditor().setValue( text );
  };

  /** Display the given query, with the currently defined prefixes */
  var showCurrentQuery = function() {
    var query = currentNamedExample();
    var q = sprintf( "%s\n\n%s", renderCurrentPrefixes(), query.query );
    setCurrentQueryText( q );
  };

  /** Return the currenty selected output format */
  var selectedFormat = function() {
    return $("#displayFormat").val();
  };

  /** Return a string comprising the currently selected prefixes */
  var renderCurrentPrefixes = function() {
    var l = $("ul.prefixes a.active" ).map( function( i, elt ) {
      return sprintf( "prefix %s: <%s>", $(elt).text().trim(), $(elt).data( "uri" ) );
    } );
    return $.makeArray(l).join( "\n" );
  };

  /** Add or remove the given prefix declaration from the current query */
  var updatePrefixDeclaration = function( prefix, uri, added ) {
    var query = currentQueryText();
    var lines = query.split( "\n" );
    var pattern = new RegExp( "^prefix +" + prefix + ":");
    var found = false;

    for (var i = 0; !found && i < lines.length; i++) {
      found = lines[i].match( pattern );
      if (found && !added) {
        lines.splice( i, 1 );
      }
    }

    if (!found && added) {
      for (var i = 0; i < lines.length; i++) {
        if (!lines[i].match( /^prefix/ )) {
          lines.splice( i, 0, sprintf( "prefix %s: <%s>", prefix, uri ) );
          break;
        }
      }
    }

    setCurrentQueryText( lines.join( "\n" ) );
  };

  /** Perform the query */
  var runQuery = function( e ) {
    e.preventDefault();
    resetResults();

    var url = currentEndpoint();
    var query = currentQueryText();
    var format = selectedFormat();

    var options = {
      data: {query: query, output: format},
      success: function( data, xhr ) {
        onQuerySuccess( data, format );
      },
      error: onQueryFail
    };

    checkForceTextFormat( format, options );
    checkForceJsonP( options );

    $.ajax( url, options );
  };

  /** Hide or reveal an element using Bootstrap .hidden class */
  var elementVisible = function( elem, visible ) {
    if (visible) {
      $(elem).removeClass( "hidden" );
    }
    else {
      $(elem).addClass( "hidden" );
    }
  };

  /** Prepare to show query time taken */
  var startTimingResults = function() {
    _startTime = new Date().getTime();
    elementVisible( ".timeTaken" );
  };

  /** Show results count and time */
  var showResultsTimeAndCount = function( count ) {
    var duration = new Date().getTime() - _startTime;
    var ms = duration % 1000;
    duration = Math.floor( duration / 1000 );
    var s = duration % 60;
    var m = Math.floor( duration / 60 );
    var suffix = (count !== 1) ? "s" : "";

    var html = sprintf( "%s result%s in %d min %d.%03d s", count, suffix, m, s, ms );

    $(".timeTaken").html( html );
    elementVisible( ".timeTaken", true );
  };

  /** For display purposes, we want the browser to not parse some formats for us */
  var checkForceTextFormat = function( format, options ) {
    if (format === "xml" || format === "json"){
      options.data["force-accept"] = "text/plain";
    }
  };

  /** Can we use CORS, or do we need to force the use of JsonP? */
  var checkForceJsonP = function( options ) {
    if (isIE()) {
      // options.dataType = "jsonp";
    }
  };

  /** Reset the results display */
  var resetResults = function() {
    $("#results").empty();
    elementVisible( ".timeTaken", false );
  };

  /** Report query failure */
  var onQueryFail = function( jqXHR, textStatus, errorThrown ) {
    showPlainTextResult( jqXHR.responseText || jqXHR.statusText, 0, "errorText", null );
  };

  /** Query succeeded - use display type to determine how to render */
  var onQuerySuccess = function( data, format ) {
    switch (format) {
      case "text":
        showPlainTextResult( data, null, null, "errorText" );
        break;
      case "json":
        var count = JSON.parse(data).results.bindings.length;
        showPlainTextResult( data, count, null, "errorText" );
        break;
      case "xml":
        var count = $($.parseXML( data )).find("results").children().length
        showPlainTextResult( data, count, null, "errorText" );
        break;
      case "tsv":
        showTableResult( data );
        break;
    }
  };

  var showPlainTextResult = function( data, count, addClass, removeClass ) {
    var lineLength = 0;
    var lineCount = 0;
    var nextNL = 0;

    while (nextNL >= 0) {
      var k = nextNL;
      nextNL = data.indexOf( "\n", k + 1 );
      if (nextNL > 0) {
        lineCount++;
        lineLength = _.max( [nextNL - k, lineLength] );
      }
    }

    // we ignore 4 rows of chrome in the query format
    showResultsTimeAndCount( (count === null) ? lineCount - 4 : count );

    // versions of IE break the text formatting of pre nodes. Why? FFS
    if (isIE()) {
      $("#results").html( "<div></div>" );
      var n = $("#results").children().get( 0 );
      n.outerHTML = sprintf( "<pre class='col-md-12 results-plain''>", lineLength * 8 ) + data.replace( /</g, "&lt;" ) + "</pre>";
    }
    else {
      $( "#results" ).html( sprintf( "<pre class='col-md-12 results-plain''></pre>", lineLength * 8 ));
      $( "#results pre.results-plain" ).text( data );
    }
    $( "#results pre.results-plain" ).addClass( addClass )
                                     .removeClass( removeClass );
  };

  var showTableResult = function( data, then ) {
    var lines = data.split( "\n" );
    var lineCount = 0;

    var data = new google.visualization.DataTable();
    $.each( lines.shift().split("\t"), function(i, c ) {data.addColumn('string', c);} );

    $.each( lines, function( i, l ) {
      if (l && l !== "") {
        lineCount++;
        var d = [];
        $.each( l.split( "\t" ), function( i, v ) {d.push( /*v.slice( 1, -1 )*/ v );} ); // TODO format values properly
        data.addRows( [d] );
      }
    } );

    // showTimeTaken( lineCount );
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

