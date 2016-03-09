'use strict';

describe('Filter: inStock', function () {

  // load the filter's module
  beforeEach(module('yoAngularApp'));

  // initialize a new instance of the filter before each test
  var inStock;
  beforeEach(inject(function ($filter) {
    inStock = $filter('inStock');
  }));

  it("should return 'Yes' for 'true'", function () {
    var text = true;
    expect(inStock(text)).toBe('Yes');
  });

  it("should return 'No' for 'false'", function () {
    var text = false;
    expect(inStock(text)).toBe('No');
  });

});
