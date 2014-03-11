define(['angular', 'services'], function (angular) {
  'use strict';

  return angular.module('checkout.filters', ['checkout.services'])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
});
