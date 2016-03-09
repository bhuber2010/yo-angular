'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var CartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartCtrl = $controller('CartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach the function removeItem to the scope', function () {
    expect(typeof CartCtrl.removeItem).toEqual('function');
  });
});
