define([
  'angular',
  'angularRoute',
  'angularResource',
  'angularCookies',
  'angularSanitize',
  'services',
  'filters',
  'directives',
  'controllers/main',
  'controllers/item'
],
function(angular) {
  'use strict';

  return angular.module('checkout', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'checkout.controllers',
    'checkout.filters',
    'checkout.services',
    'checkout.directives'
  ]);
});

