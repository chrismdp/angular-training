require.config({
  paths: {
    jquery: '../../bower_components/jquery/jquery',
    angular: '../../bower_components/angular/angular',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    angularResource: '../../bower_components/angular-resource/angular-resource',
    angularCookies: '../../bower_components/angular-cookies/angular-cookies',
    angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize',
    angularRoute: '../../bower_components/angular-route/angular-route',
    angularMocks: '../../bower_components/angular-mocks/angular-mocks'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularRoute: [ 'angular' ],
    angularResource: [ 'angular' ],
    angularCookies: [ 'angular' ],
    angularSanitize: [ 'angular' ],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },
  priority: [ 'angular' ]
});

require([
  'angular',
  'app',
  'routes'
], function(angular, app) {
  'use strict';
  angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name]);
  });
});


