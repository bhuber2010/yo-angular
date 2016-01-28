'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:ShoppingCtrl
 * @description
 * # ShoppingCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ShoppingCtrl', function ($location, teaData) {
    var that = this;
    this.defaultSortOrder = '_id';
    this.sortorder = {
      priceH: {
        name: 'Price (highest)',
        sort: '-price'
      },
      priceL: {
        name: 'Price (lowest)',
        sort: 'price'
      },
      name: {
        name: 'Name',
        sort: 'name'
      },
      rating: {
        name: 'Rating',
        sort: '-rating'
      }
    };
    this.allCat = '';
    this.catFilter = teaData.cats;
    this.defaultQuantity = 1;
    this.quantity = [2,3,4,5,6,7,8,9];
    this.teaData = teaData.teas;
    this.bagItemCount = teaData.bag.length;

    this.addToBag = function(tea){
      console.log(tea);
      tea.quantity = parseInt(tea.quantity);
      teaData.addToBag(tea);
      that.bagItemCount = teaData.bag.length;
    };

    this.checkout = function(){
      return $location.path('/shopping/cart');
    };

  });
