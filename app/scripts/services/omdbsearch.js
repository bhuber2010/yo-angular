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
      return $resource('http://www.omdbapi.com/?s=' + movieSearch, {'get': {method:'GET'}});
    };
    // Public API here
    return {
      textSearch: search
    };
  });
