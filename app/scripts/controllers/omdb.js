'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:OmdbCtrl
 * @description
 * # OmdbCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('OmdbCtrl', function ($location, omdbSearch) {
    var that = this;
    this.hideResults = false;
    this.hideDetails = true;
    this.titleSearch = function(titleSearch, movieSearchForm) {
      that.hideResults = false;
      that.hideDetails = true;
      if (movieSearchForm.$valid) {
        omdbSearch.textSearch(titleSearch)
        .get(function(data){
          console.log(data);
          var newData = data.Search.map(function(movie){
            if(movie.Poster === 'N/A') {
              movie.Poster = 'https://goo.gl/DFUVTk';
            }
            return movie;
          });
          console.log(newData);
          that.searchResults = newData;
        });
      }
    };
    this.getMovieDetails = function(imdbID) {
      omdbSearch.moveieDetails(imdbID)
      .get(function(data){
        console.log(data);
          if(data.Poster === 'N/A') {
            data.Poster = 'https://goo.gl/DFUVTk';
          }
        that.movieInfo = data;
        console.log(that.movieInfo.Poster);
        // $location.path('/omdb/' + imdbID);
        console.log(that);
        that.hideResults = true;
        that.hideDetails = false;
      });
    };

  });
