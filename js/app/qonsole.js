var qonsole = function() {
  "use strict";

  /** The loaded configuration */
  var _config = {};
  var _query_editor = null;
  var _startTime = 0;

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

    $(document)
      .ajaxStart(function() {
        elementVisible( ".loadingSpinner", true );
        startTimingResults();
      })
      .ajaxStop(function() {
        elementVisible( ".loadingSpinner", false );
      });
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
    var count, mime;

    switch (format) {
      case "text":
        count = data.split('\n').length - 5;
        mime = "text/plain";
        break;
      case "json":
        count = JSON.parse(data).results.bindings.length;
        mime = "application/json";
        break;
      case "xml":
        count = $($.parseXML( data )).find("results").children().length;
        mime = "application/xml";
        break;
      case "tsv":
        showTableResult( data );
        break;
    }

    if (mime) {
      showCodeMirrorResult( data, count, mime );
    }
  };

  /** Show the given text value in a CodeMirror block with the given language mode */
  var showCodeMirrorResult = function( code, count, mode ) {
    showResultsTimeAndCount( count );

    var editor = CodeMirror( $("#results").get(0), {
      value: code,
      mode: mode,
      lineNumbers: true,
      extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
      foldGutter: true,
      readOnly: true
    } );
  };

  /** Show the result using jQuery dataTables */
  var showTableResult = function( data ) {
    var lines = _.compact(data.split( "\n" ));
    showResultsTimeAndCount( lines.length - 1 );

    var aoColumns = _.map( lines.shift().split("\t"), function( header) {
      return {sTitle: header};
    } );
    var aaData = _.map( lines, function( line ) {
      var values = _.flatten( [line.split("\t")] );
      return _.map( values, function( v) {
        if (_.isNumber( v )) {
          return parseFloat( v );
        }
        else {
          return _.escape(v);
        }
      } );
    } );

    $("#results").empty()
                 .append( '<table cellpadding="0" cellspacing="0" border="0" class="display"></table>' )
                 .children()
                 .dataTable( {aoColumns: aoColumns,
                              aaData: aaData
                             } );
  };

  return {
    init: init
  }
}();

