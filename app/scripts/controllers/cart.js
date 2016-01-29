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
    var that = this;
    this.toggleQty = false;
    this.bag = teaData.bag;
    this.bagTotal = teaData.bagTotal();

    this.backToShopping = function(){
      console.log(this.bagTotal);
      return $location.path('/shopping');
    };

    this.removeItem = function(tea){
      teaData.removeItem(tea._id);
      that.bagTotal = teaData.bagTotal();
    };
    this.editItem = function(tea){
      tea.toggleQty = true;
    };
    this.updateItemQty = function(teaUpdate){
      teaData.updateItemQty(teaUpdate);
      teaUpdate.toggleQty = false;
      that.bagTotal = teaData.bagTotal();
    };
  });
