'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:ShoppingCtrl
 * @description
 * # ShoppingCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ShoppingCtrl', function () {
    
    this.sortorder = {
      score: {
        name: 'score',
        sort: '-data.score'
      }
    };
  });
