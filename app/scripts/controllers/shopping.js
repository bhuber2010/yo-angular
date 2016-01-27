'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:ShoppingCtrl
 * @description
 * # ShoppingCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ShoppingCtrl', function (teaData) {
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
    console.log(this.teaData);
  });
