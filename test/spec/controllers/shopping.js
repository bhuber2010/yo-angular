'use strict';

describe('Controller: ShoppingCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var ShoppingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCtrl = $controller('ShoppingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShoppingCtrl.awesomeThings.length).toBe(3);
  });
});
