'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.postdata
 * @description
 * # postdata
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('postdata', function ($resource) {
    // Service logic
    var redditPostPromise = $resource('https://www.reddit.com/r/funny.json').get();

    var RedditPromise = redditPostPromise.$promise
      .then(function(data) {
        // console.log(data.data.children);
        var newData = data.data.children.map(function(curr){
          curr.data.created = curr.data.created * 1000;
          curr.data.comments = [];
          return curr;
        });
        return newData;
      }
    );

    var newPosts = [];

    // Public API here
    return {
      getReddit: RedditPromise,
      postFakeReddit: function(post) {
        newPosts.push(post);
      },
      newPosts: newPosts,
    };
  });
