'use strict';

describe('Controller: NewpostCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var NewpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpostCtrl = $controller('NewpostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a defaultPic url to the scope', function () {
    expect(NewpostCtrl.defaultPic).toBe('http://goo.gl/L8tNf7');
  });
});
