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
    sprintf: {
      exports: "sprintf"
    }
  },
  paths: {
    "bootstrap": "lib/js/bootstrap",
    "jquery": "lib/js/jquery",
    "lodash": "lib/js/lodash",
    "sprintf": "lib/js/sprintf",
    "json2": "lib/js/json2",
    "jquery.spinjs": "../bower_components/jquery.spinjs/dist/jquery.spin",
    "datatables": "lib/js/jquery.dataTables",
    "respond": "lib/js/respond.min"
  }
});
