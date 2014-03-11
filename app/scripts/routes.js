define([
  'angular',
  'app'
],
function(angular, app) {
  'use strict';

  return app.config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  });
});
