/** A simple interface to a remote SPARQL service */

/** This class provides a duck-typed API for accessing the content of a value
 * returned from a SPARQL service. The key methods are:
 *
 * asText - returns the result as a suitably formatted text string
 * asJSON - returns the result as a suitably formatted JSON string
 * asXML - returns the result as a suitable formatted XML string
 * asTable - returns the result as an array of objects, with one key per object per query variable
 */
import _ from 'lodash'
import superagent from 'superagent'
import RemoteSparqlServiceResult from './remote-sparql-service-result'

/** This class proxies a service which is behind a remote SPARQL endpoint URL */
var RemoteSparqlService = function () {
}

_.extend(RemoteSparqlService.prototype, {
  execute: function (query, options) {
    var ajaxDataType = function (format) {
      return {
        tsv: 'html',
        csv: 'html'
      }[format] || format
    }

    var url = options.url
    var format = options.format
    var onSuccess = options.success

    var ajaxOptions = {
      data: {query: query, output: format}
    }

    return superagent.get(url)
      .query(ajaxOptions.data) // query string
      .set('accept', ajaxDataType(format))
      .end(function (err, res) {
        if (err) { return options.error(err) }
        return onSuccess.call(null, new RemoteSparqlServiceResult(res.text, format)) //eslint-disable-line
      })
  }
})

export default RemoteSparqlService
