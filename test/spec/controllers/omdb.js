'use strict';

describe('Controller: OmdbCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var OmdbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OmdbCtrl = $controller('OmdbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OmdbCtrl.awesomeThings.length).toBe(3);
  });
});
