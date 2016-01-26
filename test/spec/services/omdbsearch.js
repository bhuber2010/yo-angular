'use strict';

describe('Service: omdbSearch', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var omdbSearch;
  beforeEach(inject(function (_omdbSearch_) {
    omdbSearch = _omdbSearch_;
  }));

  it('should do something', function () {
    expect(!!omdbSearch).toBe(true);
  });

});
