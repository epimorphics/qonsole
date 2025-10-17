/* global require */

require.config({
  shim: {
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    jquery: {
      exports: '$'
    },
    sprintf: {
      exports: 'sprintf'
    },
    spin: {
      deps: [
        'jquery'
      ]
    }
  },
  paths: {
    'bootstrap': 'lib/js/bootstrap',
    'jquery': 'lib/js/jquery.min',
    'lodash': 'lib/js/lodash',
    'sprintf': 'lib/js/sprintf',
    // 'json2': 'lib/js/json2', Until I can find it ...
    'spin': 'lib/js/spin',
    'jquery.spinjs': 'lib/js/jquery.spin',
    'datatables': 'lib/js/jquery.dataTables',
    'respond': 'lib/js/respond',
    'app/remote-sparql-service': 'js/app/remote-sparql-service'
  },
  packages: [{
    name: 'codemirror',
    location: 'lib/js/cm',
    main: 'lib/codemirror'
  }]

});
