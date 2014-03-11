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
    when('/item', {
      controller: 'ItemCtrl',
      templateUrl: 'views/item.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  });
});
