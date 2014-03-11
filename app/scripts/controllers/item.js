define([
  'controllers',
],
function(controllers) {
  'use strict';

  controllers.controller('ItemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
