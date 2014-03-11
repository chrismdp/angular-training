define([
  'angularMocks',
  'controllers/item'
], function(mocks) {
  'use strict';

  describe('Controller: ItemCtrl', function () {

    var ItemCtrl,
      scope;

    beforeEach(function() {
      mocks.module('checkout.controllers');
      mocks.inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ItemCtrl = $controller('ItemCtrl', {
          $scope: scope
        });
      });
    });

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
