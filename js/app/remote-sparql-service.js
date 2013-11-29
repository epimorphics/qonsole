/** A simple interface to a remote SPARQL service */

var RemoteSparqlService = function() {
};

_.extend( RemoteSparqlService.prototype, {
  execute: function( query, options ) {

    var ajaxDataType = function( format ) {
      return {
        tsv: "html",
        csv: "html",
      }[format] || format;
    };

    var url = options.url;
    var format = options.format;

    var ajaxOptions = {
      data: {query: query, output: format},
      success: options.success,
      error: options.error,
      dataType: ajaxDataType( format )
    };

    return $.ajax( url, ajaxOptions );
  }
} );
