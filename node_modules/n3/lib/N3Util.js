"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNamedNode = isNamedNode;
exports.isBlankNode = isBlankNode;
exports.isLiteral = isLiteral;
exports.isVariable = isVariable;
exports.isDefaultGraph = isDefaultGraph;
exports.inDefaultGraph = inDefaultGraph;
exports.prefix = prefix;
exports.prefixes = prefixes;

var _N3DataFactory = _interopRequireDefault(require("./N3DataFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **N3Util** provides N3 utility functions.
// Tests whether the given term represents an IRI
function isNamedNode(term) {
  return !!term && term.termType === 'NamedNode';
} // Tests whether the given term represents a blank node


function isBlankNode(term) {
  return !!term && term.termType === 'BlankNode';
} // Tests whether the given term represents a literal


function isLiteral(term) {
  return !!term && term.termType === 'Literal';
} // Tests whether the given term represents a variable


function isVariable(term) {
  return !!term && term.termType === 'Variable';
} // Tests whether the given term represents the default graph


function isDefaultGraph(term) {
  return !!term && term.termType === 'DefaultGraph';
} // Tests whether the given quad is in the default graph


function inDefaultGraph(quad) {
  return isDefaultGraph(quad.graph);
} // Creates a function that prepends the given IRI to a local name


function prefix(iri, factory) {
  return prefixes({
    '': iri
  }, factory)('');
} // Creates a function that allows registering and expanding prefixes


function prefixes(defaultPrefixes, factory) {
  // Add all of the default prefixes
  var prefixes = Object.create(null);

  for (var prefix in defaultPrefixes) processPrefix(prefix, defaultPrefixes[prefix]); // Set the default factory if none was specified


  factory = factory || _N3DataFactory.default; // Registers a new prefix (if an IRI was specified)
  // or retrieves a function that expands an existing prefix (if no IRI was specified)

  function processPrefix(prefix, iri) {
    // Create a new prefix if an IRI is specified or the prefix doesn't exist
    if (typeof iri === 'string') {
      // Create a function that expands the prefix
      var cache = Object.create(null);

      prefixes[prefix] = function (local) {
        return cache[local] || (cache[local] = factory.namedNode(iri + local));
      };
    } else if (!(prefix in prefixes)) {
      throw new Error('Unknown prefix: ' + prefix);
    }

    return prefixes[prefix];
  }

  return processPrefix;
}