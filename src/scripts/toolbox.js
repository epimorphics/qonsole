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
                     '              ?v a ?dt_or_class .\n' +
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
                                  '              ?v a ?dt_or_class .\n' +
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
                            '} GROUP BY ?property ORDER BY desc(?count)\n',
    "Describe Sample (Type)":  'DESCRIBE ?sample\n' +
                        'WHERE\n' +
                        '{\n' +
                        '   { SELECT (sample(?thing) as ?sample)\n' +
                        '     WHERE {\n' +
                        '       ?thing a ?class.\n' +
                        '     } GROUP BY ?class\n' +
                        '   }\n' +
                        '}\n', 
    "Decribe Sample (Type), Subject and Object (Property)":   'DESCRIBE ?sample ?subject ?object\n' +
                                                              'WHERE\n' + 
                                                              '{ \n' + 
                                                              '    { SELECT (sample(?thing) as ?sample)\n' +
                                                              '      WHERE {\n' +
                                                              '          ?thing a ?class.\n' +
                                                              '      } GROUP BY ?class \n' +
                                                              '    } UNION {\n' +
                                                              '       SELECT (sample(?s) as ?subject) ?p (sample(?o) as ?object) \n' +
                                                              '       WHERE {\n' +
                                                              '           ?s ?p ?o\n' +
                                                              '       } GROUP BY ?p\n' +
                                                              '    }\n' +
                                                              '}', 
    "Describe Sample (Type) and 1 Value of Every Property Used With Object" :   'DESCRIBE ?sample ?subject ?object \n' +
                                                                                'WHERE \n' +
                                                                                '{ \n' +
                                                                                '  { SELECT (sample(?thing) as ?sample)\n' +
                                                                                '    WHERE {\n' +
                                                                                '       ?thing a ?class.\n' +
                                                                                '    } GROUP BY ?class}\n' +
                                                                                '  }\n' +
                                                                                '  { select ?sample (sample(?o) as ?object) \n' +
                                                                                '    where {\n' +
                                                                                '      ?sample ?p ?object .\n' +
                                                                                '    }\n' +
                                                                                '    group by ?p\n' +
                                                                                '  } \n'+
                                                                                '}'
}