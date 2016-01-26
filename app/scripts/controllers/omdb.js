'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:OmdbCtrl
 * @description
 * # OmdbCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('OmdbCtrl', function (omdbSearch) {
    var that = this;
    this.titleSearch = function(titleSearch, movieSearchForm) {
      if (movieSearchForm.$valid) {
        omdbSearch.textSearch(titleSearch)
        .get(function(data){
          console.log(data);
          that.searchResults = data.Search;
        });
      }
    };


  });
