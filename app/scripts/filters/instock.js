'use strict';

/**
 * @ngdoc filter
 * @name yoAngularApp.filter:inStock
 * @function
 * @description
 * # inStock
 * Filter in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .filter('inStock', function () {
    return function (stockState) {
      if (stockState) {
        return "Yes";
      }
      return "No";
    };
  });
