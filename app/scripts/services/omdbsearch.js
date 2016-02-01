'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.omdbSearch
 * @description
 * # omdbSearch
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('omdbSearch', function ($resource) {
    // Service logic
    var search = function(movieSearch) {
      return $resource('https://www.omdbapi.com/?s=' + movieSearch, {'get': {method:'GET'}});
    };

    var movie = function(movieID) {
      return $resource('https://www.omdbapi.com/?i=' + movieID, {'get': {method:'GET'}});
    };
    // Public API here
    return {
      textSearch: search,
      moveieDetails: movie
    };
  });
