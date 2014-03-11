define([
  'angularMocks',
  'controllers/main'
], function(mocks) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    var MainCtrl,
    scope;

    beforeEach(function() {
      mocks.module('checkout.controllers');
      mocks.inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
          $scope: scope
        });
      });
    });

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
