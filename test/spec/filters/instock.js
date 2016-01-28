'use strict';

describe('Filter: inStock', function () {

  // load the filter's module
  beforeEach(module('yoAngularApp'));

  // initialize a new instance of the filter before each test
  var inStock;
  beforeEach(inject(function ($filter) {
    inStock = $filter('inStock');
  }));

  it('should return the input prefixed with "inStock filter:"', function () {
    var text = 'angularjs';
    expect(inStock(text)).toBe('inStock filter: ' + text);
  });

});
