# Qonsole - a simple console for running SPARQL queries

Suppose you have a linked-data dataset that you've published on the web, and that
you'd like to provide your users with the means to run SPARQL queries to explore 
your data. Most SPARQL end-points allow you to use HTTP `get` and `post` commands
to send a query and get back results, so it's easy enough to put up an HTML form for 
your users to type in a query and get back some results. But that's not necessarily
that helpful for your users, because:

  * in some browsers, hitting the 'back' button after posting a query means that the
  text input control is emptied. So your users will lose the query that they have typed, 
  which makes iterative development of the query hard.
  * you can provide at most one sample query to get your users started with suggestions
  and ideas.
  * you don't have any to manage prefixes, which can make a huge difference to the
  readability of a query (compare `<http://www.w3.org/2000/01/rdf-schema#comment>` to
  `rdfs:comment`, for example).
  * the returned values from a SPARQL form are generally represented as a text format, or
  using a MIME type (e.g. `text/csv` that makes your user's computer open the returning file
  in another program (e.g. a spreadsheet). Plain text can be hard to explore, while opening a
  different application takes your user's focus away from the task of editing the query and
  exploring your data.

See a [demo of qonsole](http://epimorphics.github.io/qonsole/demo-vertical.html), 
using the [UK bathing water quality dataset](http://environment.data.gov.uk/bwq/).

Qonsole provides the following features:

  * An edit control with SPARQL syntax highlighting, undo, and other familiar code editing 
  features (courtesy of [CodeMirror](http://codemirror.net/)).
  * Display of the query and the return result on one page
  * A configurable set of example queries your users can select with one click
  * A configurable set of pre-declared prefixes, and the ability to add new prefixes dynamically,
  including looking a well-know prefix up on [prefix.cc](http://prefix.cc). Users can add or
  remove prefix declarations from the edit window with one click.
  * A choice of return formats, including XML, JSON and plain text. XML and JSON results
  display in a structured editor window for easier browsing. By default, results are returned
  in a table control, with sortable columns, paging and search.

Qonsole is free open-source software under an 
[Apache license](http://www.apache.org/licenses/LICENSE-2.0.html), and was developed by  
[Epimorphics Ltd](http://www.epimorphics.com).

## Adding qonsole to your page

Clone the git repository ([epimorphics/qonsole](http://github.com/epimorphics/qonsole)), or
download the files individually from GitHub. The `demo-` pages show a few variants on laying
out the elements of the page body that Qonsole needs, and the JavaScript and CSS files you'll
need to include.

Qonsole is configured by passing a JSON data structure to the `qonsole.init()` call. Currently,
this config object allows you to specify:

<dl>
  <dt><code>elements</code> &ndash; available SPARQL end-points</dt>
  <dd>The value of this config element is a JSON object, whose keys are short
  references to available endpoints and whose values are URLs. One `default` end-point
  should always be provided. The goal here is to allow different example queries potentially
  to be run against different specific SPARQL endpoints. Example:
<pre>
    endpoints: {
      "default":  "http://environment.data.gov.uk/sparql/bwq/query",
    }
</pre>
  </dd>
  <dt><code>prefixes</code> &ndash; shared list of pre-defined prefixes</dt>
  <dd>The prefixes listed in this element will be added to each query, and may be
  selected on or off by a single click. The value is a JSON object, whose keys are the
  prefix short-name, and whose values are URIs. Example:

<pre>
    prefixes: {
      "bw":       "http://environment.data.gov.uk/def/bathing-water/",
      "bwq":      "http://environment.data.gov.uk/def/bathing-water-quality/",
      "ef-sp":    "http://location.data.gov.uk/def/ef/SamplingPoint/",
      "interval": "http://reference.data.gov.uk/def/intervals/",
      "stats":    "http://statistics.data.gov.uk/def/administrative-geography/",
      "sr":       "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/",
      "rdf":      "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "rdfs":     "http://www.w3.org/2000/01/rdf-schema#",
      "owl":      "http://www.w3.org/2002/07/owl#",
      "xsd":      "http://www.w3.org/2001/XMLSchema#"
    },
</pre>
  </dd>
  <dt><code>queries</code> &ndash; pre-defined example queries</dt>
  <dd>
  This element defines the example queries that users can select run, or
  to base their own queries on. The value is a JSON array, each element of
  which is one example query. Note that prefixes do not need to be
  declared in the example queries. The query text can be declared in the config
  structure itself, with the `query` key, or accessed remotely from a different URL
  using the `queryURL` key:
<pre>
    queries: [
      { "name": "Properties of a named bathing water",
        "query": "select ?predicate ?object\nwhere {\n" +
                 "  ?bw rdfs:label \"Spittal\"@en ;\n" +
                 "      ?predicate ?object\n}"
      },
      { "name": "all OWL classes",
        "query": "select ?class ?label ?description\nwhere {\n" +
                 "  ?class a owl:Class.\n" +
                 "  optional { ?class rdfs:label ?label}\n" +
                 "  optional { ?class rdfs:comment ?description}\n}"
      },
      { "name": "Properties of a named bathing water",
        "queryURL": "list-properties.rq"
      }
    ]
</pre>

By default, each query gets all of the shared prefixes declared in the configuration
object (see above). However this isn't always necessary. Simpler example queries may be easier
to read if the prefixes shown are only those actually in use. There are two mechanisms
you can use to control the prefixes used when displaying a query. Firstly, if the query
itself includes <code>prefix</code> declarations, then only those prefixes will be shown. Alternatively,
you can list the prefix keys that should be used with the query with a <code>prefixes</code> key
in the configuration object:

<pre>
  queries: [
    { "name": "Properties of a named bathing water",
      "query": "select ?predicate ?object\nwhere {\n" +
               "  ?bw rdfs:label \"Spittal\"@en ;\n" +
               "      ?predicate ?object\n}",
      "prefixes": [rdfs", "bw"]
    }]
</pre>
  </dd>
</dl>


