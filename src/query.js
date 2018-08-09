import _ from 'lodash'

/**
    * Return an array of the prefixes parsed from the given query body
    * @param  {string} queryBody The query body
    * @return {array} Parsed prefixes
    */
const getPrefixesFromQuery = function (queryBody) {
  var leader = queryLeader(queryBody)[0].trim()
  var leaderLines = leader.split('\n')
  var prefixLines = _.filter(leaderLines, function (line) { return line.match(/prefix/) })
  var declarations = _.map(prefixLines, function (line) { return line.split(/@?prefix/) })

  let rtn = {}
  declarations.forEach((pair) => {
    var m = pair[1].match(/^\s*([\w-]+)\s*:\s*<([^>]*)>\s*\.?\s*$/)
    rtn[m[1]] = m[2]
  })
  return rtn
}

const parseQueryPrefixes = function (queryText) {
  var prefixes = {}
  var prefixPairs = getPrefixesFromQuery(queryText)
  _.each(prefixPairs, function (pair) { prefixes[pair.name] = pair.uri })
  return prefixes
}

/**
   * Split a query into leader (prefixes and leading blank lines) and body
   * @param  {string} query Input query
   * @return {array} Length-2 array of header and body
   */
const queryLeader = function (query) {
  var isLeaderLine = function (line) {
    return line.match(/(^\s*@?prefix)|(^\s*#)|(^\s*$)/)
  }

  var lines = query.split('\n')
  var leaderLines = []
  var leader = true

  while (leader && !_.isEmpty(lines)) {
    leader = isLeaderLine(lines[0])
    if (leader) {
      leaderLines.push(lines.shift())
    }
  }

  return [leaderLines.join('\n'), lines.join('\n')]
}

/**
   * Remove the query leader
   * @param  {string} query Input query
   * @return {string} The leader part of the query
   */
var getQueryBody = function (query) {
  return queryLeader(query)[1]
}

/**
   * Return a string comprising the given prefixes in SPARQL format
   * @param  {object} prefixes Given prefixes
   * @return {string} SPARQL-format prefixes
   */
var renderPrefixes = function (prefixes) {
  return Object.keys(prefixes).map(function (key, index) {
    return `prefix ${key}: <${prefixes[key]}>`
  }).join('\n')
}

export {
  getPrefixesFromQuery,
  parseQueryPrefixes,
  queryLeader,
  renderPrefixes,
  getQueryBody
}
