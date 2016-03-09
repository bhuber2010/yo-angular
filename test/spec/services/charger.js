'use strict';

describe('Service: charger', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var charger;
  beforeEach(inject(function (_charger_) {
    charger = _charger_;
  }));

  it('should do something', function () {
    expect(!!charger).toBe(true);
  });

});
