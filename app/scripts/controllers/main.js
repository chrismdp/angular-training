define([
  'angular'
],
function(angular) {
  'use strict';

  return angular.module('checkout.controllers', ['checkout.services'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
