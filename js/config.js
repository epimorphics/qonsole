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
    "app/remote-sparql-service": "js/app/remote-sparql-service"
  },
  packages: [{
    name: "codemirror",
    location: "lib/js/cm",
    main: "lib/codemirror"
  }]

});
