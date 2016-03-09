'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:EfillCtrl
 * @description
 * # EfillCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('EfillCtrl', function (charger) {
    var that = this;

    this.search = function(search, form) {
      if (form.$valid) {
        charger.addressSearch(search).get(function(data){
          console.log(data.results[0].geometry.location);
          var geoAddress = data.results[0].geometry.location;
          charger.chargerSearch(geoAddress).get(function(results){
            console.log(results);
            that.chargers = results;
          });
        });

        that.searchInput = '';
      }
    };
  });
