export default {
  hideEndpoints: false,
  endpoints: {
    'default': 'http://environment.data.gov.uk/sparql/bwq/query'
  },
  prefixes: {
    'bw': 'http://environment.data.gov.uk/def/bathing-water/',
    'bwq': 'http://environment.data.gov.uk/def/bathing-water-quality/',
    'ef-sp': 'http://location.data.gov.uk/def/ef/SamplingPoint/',
    'interval': 'http://reference.data.gov.uk/def/intervals/',
    'stats': 'http://statistics.data.gov.uk/def/administrative-geography/',
    'sr': 'http://data.ordnancesurvey.co.uk/ontology/spatialrelations/',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#'
  },
  queries: [
    { 'name': 'Properties of a named bathing water',
      'query': 'select ?predicate ?object\nwhere {\n' +
               '  ?bw rdfs:label "Spittal"@en ;\n' +
               '      ?predicate ?object\n}'
    },
    { 'name': 'all OWL classes',
      'query': 'select ?class ?label ?description\nwhere {\n' +
               '  ?class a owl:Class.\n' +
               '  optional { ?class rdfs:label ?label}\n' +
               '  optional { ?class rdfs:comment ?description}\n}'
    },
    {
      'name': 'Example with embedded comments',
      'query': '# comment 1\nprefix foo: <http://fubar.com/foo>\nprefix bar: <http://fubar.com/bar>\n#comment 2\nselect * {}'
    }
  ],
  allowQueriesFromURL: true
}
