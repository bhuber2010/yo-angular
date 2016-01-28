'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('CartCtrl', function ($location, teaData) {
    this.bag = teaData.bag;
    this.bagTotal = teaData.bagTotal;

    this.backToShopping = function(){
      console.log(this.bagTotal);
      return $location.path('/shopping');
    };
  });
