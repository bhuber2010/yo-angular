'use strict';

describe('Service: teaData', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var teaData;
  beforeEach(inject(function (_teaData_) {
    teaData = _teaData_;
  }));

  it('should do something', function () {
    expect(!!teaData).toBe(true);
  });

});
