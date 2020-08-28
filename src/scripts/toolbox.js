export var toolbox = {
    "Class Demographic": 'SELECT ?class (count(distinct ?t) as ?count)\n' +
                         'WHERE {\n' +
                         '  ?t a ?class .\n' +
                         '} GROUP BY ?class ORDER BY desc(?count)\n',
    "Class Diagram": 'SELECT DISTINCT ?class ?icount ?property ?dt_or_class ?multiValued WHERE {\n' +
                     '  { SELECT ?class (sample(?t) as ?thing) (count(distinct ?t) as ?icount)\n' +
                     '      WHERE {\n' +
                     '          ?t a ?class .\n' +
                     '      } GROUP BY ?class ORDER BY desc(?icount)\n' +
                     '  }\n' +
                     '  OPTIONAL {\n' +
                     '      { ?thing ?property ?v .\n' +
                     '          FILTER (isLiteral(?v))\n' +
                     '          BIND (datatype(?v) as ?dt_or_class)\n' +
                     '      } UNION {\n' +
                     '          ?thing ?property ?v .\n' +
                     '          FILTER (isURI(?v) || isBlank(?v))\n' +
                     '          OPTIONAL {\n' +
                     '              v a ?dt_or_class .\n' +
                     '          }\n' +
                     '      }\n' +
                     '  } OPTIONAL {\n' +
                     '      FILTER EXISTS {\n' +
                     '          ?thing ?property ?v,?v2\n' +
                     '          FILTER (?v != ?v2)\n' +
                     '      }\n' +
                     '      BIND (true as ?multiValued)\n' +
                     '  }\n' +
                     '} ORDER BY desc(?icount) ?class ?property ?dt_or_class\n',
    "Class Diagram (Exhaustive)": 'SELECT DISTINCT ?class ?icount ?property ?dt_or_class ?multiValued WHERE {\n' +
                                  '  { SELECT ?class (sample(?t) as ?thing) (count(distinct ?t) as ?icount)\n' +
                                  '      WHERE {\n' +
                                  '          ?t a ?class .\n' +
                                  '      } GROUP BY ?class ORDER BY desc(?icount)\n' +
                                  '  }\n' +
                                  '  ?thing a ?class \n' +
                                  '  OPTIONAL {\n' +
                                  '      { ?thing ?property ?v .\n' +
                                  '          FILTER (isLiteral(?v))\n' +
                                  '          BIND (datatype(?v) as ?dt_or_class)\n' +
                                  '      } UNION {\n' +
                                  '          ?thing ?property ?v .\n' +
                                  '          FILTER (isURI(?v) || isBlank(?v))\n' +
                                  '          OPTIONAL {\n' +
                                  '              v a ?dt_or_class .\n' +
                                  '          }\n' +
                                  '      }\n' +
                                  '  } OPTIONAL {\n' +
                                  '      FILTER EXISTS {\n' +
                                  '          ?thing ?property ?v,?v2\n' +
                                  '          FILTER (?v != ?v2)\n' +
                                  '      }\n' +
                                  '      BIND (true as ?multiValued)\n' +
                                  '  }\n' +
                                  '} ORDER BY desc(?icount) ?class ?property ?dt_or_class\n',
    "Property Demographic": 'SELECT ?property (count(distinct *) as ?count)\n' +
                            'WHERE {\n' +
                            '?s ?property ?o .\n' +
                            '} GROUP BY ?property ORDER BY desc(?count)\n'
}