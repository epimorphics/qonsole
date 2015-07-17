/* Copyright (c) 2012-2015 Epimorphics Ltd. Released under Apache License 2.0 http://www.apache.org/licenses/ */

/* global define */

define( [
  "lodash",
  "jquery",
  "sprintf",
  "lib/js/cm/lib/codemirror",
  "js/app/remote-sparql-service",
  "bootstrap",
  "lib/js/cm/mode/sparql/sparql",
  "lib/js/cm/mode/xml/xml",
  "lib/js/cm/mode/javascript/javascript",
  "jquery.spinjs",
  "datatables"
],
function(
  _,
  $,
  sprintf,
  CodeMirror,
  RemoteSparqlService
) {
  "use strict";

  /* --- module vars --- */
  /** The loaded configuration */
  var _config = {};
  var _queryEditor = null;
  var _startTime = 0;
  var _outstandingQueries = 0;

  /* --- application code --- */

  /** Initialisation - only called once */
  var init = function( config ) {
    loadConfig( config );
    bindEvents();

    $.ajaxSetup( {
      converters: {"script json": true}
    } );
  };

  /** Load the configuration definition */
  var loadConfig = function( config ) {
    if (config.configURL) {
      $.getJSON( config.configURL, onConfigLoaded );
    }
    else {
      onConfigLoaded( config );
    }
  };

  /** Return the current config object */
  var config = function() {
    _config.parsedPrefixes = parseQueryPrefixes();
    return _config;
  };

  /** Bind events that we want to manage */
  var bindEvents = function() {
    $("ul.prefixes").on( "click", "a.btn", function( e ) {
      var elem = $(e.currentTarget);
      updatePrefixDeclaration( $.trim( elem.data( "prefix" ) ), elem.data( "uri" ), !elem.is(".active") );
    } );
    $("ul.examples").on( "click", "a", function() {
      $("ul.examples a").removeClass( "active" );
      _.defer( function() {showCurrentQuery();} );
    } );
    $(".endpoints").on( "click", "a", function( e ) {
      var elem = $(e.currentTarget);
      setCurrentEndpoint( $.trim( elem.text() ) );
    } );
    $("ul.formats").on( "click", "a", function( e ) {
      var elem = $(e.currentTarget);
      setCurrentFormat( elem.data( "value" ), $.trim( elem.text() ) );
    } );

    $("a.run-query").on( "click", runQuery );

    $(document)
      .ajaxStart(function() {
        elementVisible( ".loadingSpinner", true );
        startTimingResults();
        disableSubmit( true );
      })
      .ajaxStop(function() {
        elementVisible( ".loadingSpinner", false );
        disableSubmit( false );
      });

    // dialogue events
    $("#prefixEditor").on( "click", "#lookupPrefix", onLookupPrefix )
                      .on( "keyup", "#inputPrefix", function( e ) {
                        var elem = $(e.currentTarget);
                        $("#lookupPrefix span").text( sprintf.sprintf( "'%s'", elem.val() ));
                      } );
    $("#addPrefix").on( "click", onAddPrefix );
  };

  /** List the current defined prefixes from the config */
  var initPrefixes = function( config ) {
    var prefixAdd = $("ul.prefixes li:last" );
    $.each( config.prefixes, function( key, value ) {
      var displayKey = key;
      if (!key || key === "") {
        displayKey = ":";
      }
      var html = sprintf.sprintf( "<li><a class='btn btn-custom2 btn-sm active' data-toggle='button' data-uri='%s' data-prefix='%s'>%s</a></li>",
                          value, key, displayKey );
      $(html).insertBefore( prefixAdd);
    } );
  };

  /** List the example queries from the config */
  var initExamples = function( config ) {
    var examples = $("ul.examples");

    examples.empty();

    $.each( config.queries, function( i, queryDesc ) {
      var html = sprintf.sprintf( "<li><a class='btn btn-custom2 btn-sm' data-toggle='button'>%s</a></li>",
                          queryDesc.name );
      examples.append( html );

      if (queryDesc.queryURL) {
        loadRemoteQuery( queryDesc.name, queryDesc.queryURL );
      }
    } );

    setFirstQueryActive();
  };

  /** Set the default active query */
  var setFirstQueryActive = function() {
    if (_outstandingQueries === 0) {
      $("ul.examples").find("a").first().addClass( "active" );
      showCurrentQuery();
    }
  };

  /** Load a remote query */
  var loadRemoteQuery = function( name, url ) {
    _outstandingQueries++;

    var options = {
      success: function( data ) {
        namedExample( name ).query = data;

        _outstandingQueries--;
        setFirstQueryActive();
      },
      failure: function() {
        namedExample( name ).query = "Not found: " + url;

        _outstandingQueries--;
        setFirstQueryActive();
      },
      dataType: "text"
    };

    $.ajax( url, options );
  };

  /** Set up the drop-down list of end-points */
  var initEndpoints = function( config ) {
    var endpoints = $("ul.endpoints");
    endpoints.empty();

    $.each( config.endpoints, function( key, url ) {
      var html = sprintf.sprintf( "<li role='presentation'><a role='menuitem' tabindex='-1' href='#'>%s</a></li>",
                          url );
      endpoints.append( html );
    } );

    setCurrentEndpoint( config.endpoints["default"] );
  };

  /** Successfully loaded the configuration */
  var onConfigLoaded = function( config ) {
    _config = config;
    initPrefixes( config );
    initExamples( config );
    initEndpoints( config );
  };

  /** Set the current endpoint text */
  var setCurrentEndpoint = function( url ) {
    $("[id=sparqlEndpoint]").val( url );
  };

  /** Return the current endpoint text */
  var currentEndpoint = function() {
    return $("[id=sparqlEndpoint]").val();
  };

  /** Return the query definition with the given name */
  var namedExample = function( name ) {
    return _.find( config().queries, function( ex ) {return ex.name === name;} );
  };

  /** Return the currently active named example */
  var currentNamedExample = function() {
    return namedExample( $.trim( $("ul.examples a.active").first().text() ) );
  };

  /** Return the DOM node representing the query editor */
  var queryEditor = function() {
    if (!_queryEditor) {
      _queryEditor = new CodeMirror( $("#query-edit-cm").get(0), {
        lineNumbers: true,
        mode: "sparql"
      } );
    }
    return _queryEditor;
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
    displayQuery( query );
  };

  /** Display the given query */
  var displayQuery = function( query ) {
    if (query) {
      var queryBody = query.query ? query.query : query;
      var prefixes = assemblePrefixes( queryBody, query.prefixes );

      var q = sprintf.sprintf( "%s\n\n%s", renderPrefixes( prefixes ), stripLeader( queryBody ) );
      setCurrentQueryText( q );

      syncPrefixButtonState( prefixes );
    }
  };

  /** Return the currenty selected output format */
  var selectedFormat = function() {
    return $("a.display-format").data( "value" );
  };

  /** Update the user's format selection */
  var setCurrentFormat = function( val, label ) {
    $("a.display-format").data( "value", val ).find("span").text( label );
  };

  /** Return the prefixes currently defined in the query */
  var parseQueryPrefixes = function() {
    var prefixes = {};
    var prefixPairs = assemblePrefixesFromQuery( currentQueryText() );
    _.each( prefixPairs, function( pair ) {prefixes[pair.name] = pair.uri;} );
    return prefixes;
  };

  /** Assemble the set of prefixes to use when initially rendering the query */
  var assemblePrefixes = function( queryBody, queryDefinitionPrefixes ) {
    if (queryBody.match( /^prefix/ )) {
      // strategy 1: there are prefixes encoded in the query body
      return assemblePrefixesFromQuery( queryBody );
    }
    else if (queryDefinitionPrefixes) {
      // strategy 2: prefixes given in query def
      return _.map( queryDefinitionPrefixes, function( prefixName ) {
        return {name: prefixName, uri: config().prefixes[prefixName] };
      } );
    }
    else {
      return assembleCurrentPrefixes();
    }
  };

  /** Return an array comprising the currently selected prefixes */
  var assembleCurrentPrefixes = function() {
    var l = $("ul.prefixes a.active" ).map( function( i, elt ) {
      return {name: $.trim( $(elt).data( "prefix" ) ),
              uri: $(elt).data( "uri" )};
    } );
    return $.makeArray(l);
  };

  /** Return an array of the prefixes parsed from the given query body */
  var assemblePrefixesFromQuery = function( queryBody ) {
    var leader = queryLeader( queryBody )[0].trim();
    var pairs = _.compact( leader.split( "prefix" ) );
    var prefixes = [];

    _.each( pairs, function( pair ) {
      var m = pair.match( "^\\s*([\\w\\-]+)\\s*:\\s*<([^>]*)>\\s*$" );
      prefixes.push( {name: m[1], uri: m[2]} );
    } );

    return prefixes;
  };

  /** Ensure that the prefix buttons are in sync with the prefixes used in a new query */
  var syncPrefixButtonState = function( prefixes ) {
    $("ul.prefixes a" ).each( function( i, elt ) {
      var name = $.trim( $(elt).data( "prefix" ) );

      if (_.find( prefixes, function(p) {return p.name === name;} )) {
        $(elt).addClass( "active" );
      }
      else {
        $(elt).removeClass( "active" );
      }
    } );
  };

  /** Split a query into leader (prefixes and leading blank lines) and body */
  var queryLeader = function( query ) {
    var pattern = /(prefix [^>]+>[\s\n]*)/;
    var queryBody = query;
    var i = 0;
    var m = queryBody.match( pattern );

    while (m) {
      i += m[1].length;
      queryBody = query.substring( i );
      m = queryBody.match( pattern );
    }

    return [query.substring( 0, query.length - queryBody.length), queryBody];
  };

  /** Remove the query leader */
  var stripLeader = function( query ) {
    return queryLeader( query )[1];
  };

  /** Return a string comprising the given prefixes */
  var renderPrefixes = function( prefixes ) {
    return _.map( prefixes, function( p ) {
      return sprintf.sprintf( "prefix %s: <%s>", p.name, p.uri );
    } ).join( "\n" );
  };

  /** Add or remove the given prefix declaration from the current query */
  var updatePrefixDeclaration = function( prefix, uri, added ) {
    var query = currentQueryText();
    var lines = query.split( "\n" );
    var pattern = new RegExp( "^prefix +" + prefix + ":");
    var found = false;
    var i;

    for (i = 0; !found && i < lines.length; i++) {
      found = lines[i].match( pattern );
      if (found && !added) {
        lines.splice( i, 1 );
      }
    }

    if (!found && added) {
      for (i = 0; i < lines.length; i++) {
        if (!lines[i].match( /^prefix/ )) {
          lines.splice( i, 0, sprintf.sprintf( "prefix %s: <%s>", prefix, uri ) );
          break;
        }
      }
    }

    setCurrentQueryText( lines.join( "\n" ) );
  };

  /** Return the sparql service we're querying against */
  var sparqlService = function() {
    var service = config().service;
    if (!service) {
      // default is the remote service
      config().service = new RemoteSparqlService();
      service = config().service;
    }

    return service;
  };

  /** Perform the query */
  var runQuery = function( e ) {
    e.preventDefault();
    resetResults();

    var format = selectedFormat();
    var query = currentQueryText();

    var options = {
      url: currentEndpoint(),
      format: format,
      success: function( data ) {
        onQuerySuccess( data, format );
      },
      error: onQueryFail
    };

    sparqlService().execute( query, options );
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

    var html = sprintf.sprintf( "%s result%s in %d min %d.%03d s", count, suffix, m, s, ms );

    $(".timeTaken").html( html );
    elementVisible( ".timeTaken", true );
  };

  /** Reset the results display */
  var resetResults = function() {
    $("#results").empty();
    elementVisible( ".timeTaken", false );
  };

  /** Report query failure */
  var onQueryFail = function( jqXHR ) {
    showResultsTimeAndCount( 0 );
    var text = jqXHR.valueOf().responseText || sprintf.sprintf( "Sorry, that didn't work because: '%s'", jqXHR.valueOf().statusText );
    $("#results").html( sprintf.sprintf( "<pre class='text-danger'>%s</pre>", _.escape(text) ) );
  };

  /** Query succeeded - use display type to determine how to render */
  var onQuerySuccess = function( data, format ) {
    var options = data.asFormat( format, config() );

    if (options && !options.table) {
      showCodeMirrorResult( options );
    }
    else if (options && options.table) {
      showTableResult( options );
    }
  };

  /** Show the given text value in a CodeMirror block with the given language mode */
  var showCodeMirrorResult = function( options ) {
    showResultsTimeAndCount( options.count );

    new CodeMirror( $("#results").get(0), {
      value: options.data,
      mode: options.mime,
      lineNumbers: true,
      extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      foldGutter: true,
      readOnly: true
    } );
  };

  /** Show the result using jQuery dataTables */
  var showTableResult = function( options ) {
    showResultsTimeAndCount( options.count );

    options.oLanguage = {
      "sEmptyTable": "Query did not return any results."
    };

    $("#results").empty()
                 .append( "<div class='auto-overflow'></div>")
                 .children()
                 .append( "<table cellpadding='0' cellspacing='0' border='0' class='display'></table>" )
                 .children()
                 .dataTable( options );
  };

  /** Lookup a prefix on prefix.cc */
  var onLookupPrefix = function( e ) {
    e.preventDefault();

    var prefix = $.trim( $("#inputPrefix").val() );
    $("#inputURI").val("");

    if (prefix) {
      $.getJSON( sprintf.sprintf( "http://prefix.cc/%s.file.json", prefix ),
                function( data ) {
                  $("#inputURI").val( data[prefix] );
                }
            );
    }
  };

  /** User wishes to add the prefix */
  var onAddPrefix = function() {
    var prefix = $.trim( $("#inputPrefix").val() );
    var uri = $.trim( $("#inputURI").val() );

    if (uri) {
      _config.prefixes[prefix] = uri;
    }
    else {
      delete _config.prefixes[prefix];
    }

    // remember the state of current user selections, then re-create the list
    var selections = {};
    $("ul.prefixes a.btn").each( function( i, a ) {selections[$(a).text()] = $(a).hasClass("active");} );

    $("ul.prefixes li[class!=keep]").remove();
    initPrefixes( _config );

    // restore selections state
    $.each( selections, function( k, v ) {
      if (!v) {
        $(sprintf.sprintf("ul.prefixes a.btn:contains('%s')", k)).removeClass("active");
      }
    } );

    var lines = currentQueryText().split("\n");
    lines = _.reject( lines, function( line ) {return line.match( /^prefix/ );} );
    var q = sprintf.sprintf( "%s\n%s", renderPrefixes( assembleCurrentPrefixes() ), lines.join( "\n" ) );
    setCurrentQueryText( q );
  };

  /** Disable or enable the button to submit a query */
  var disableSubmit = function( disable ) {
    var elem = $("a.run-query");
    elem.prop( "disabled", disable );
    if (disable) {
      elem.addClass( "disabled" );
    }
    else {
      elem.removeClass( "disabled" );
    }
  };

  return {
    init: init
  };

} );

