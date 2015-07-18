/* global require */

require.config({
  shim: {
    bootstrap: {
      deps: [
        "jquery"
      ]
    },
    jquery: {
      exports: "$"
    },
    "jquery.spinjs": {
      deps: ["jquery"]
    },
    sprintf: {
      exports: "sprintf"
    }
  },
  paths: {
    "bootstrap": "lib/js/bootstrap",
    "jquery": "lib/js/jquery",
    "lodash": "lib/js/lodash",
    "sprintf": "lib/js/sprintf.min",
    "json2": "lib/js/json2",
    "jquery.spinjs": "lib/js/jquery.spin",
    "datatables": "lib/js/jquery.dataTables",
    "respond": "lib/js/respond.min",
    "codemirror/lib/codemirror": "lib/js/cm/lib/codemirror",
    "codemirror/mode/sparql/sparql": "lib/js/cm/mode/sparql/sparql",
    "codemirror/mode/javascript/javascript": "lib/js/cm/mode/javascript/javascript",
    "codemirror/mode/xml/xml": "lib/js/cm/mode/xml/xml",
    "app/remote-sparql-service": "js/app/remote-sparql-service"
  }

});
