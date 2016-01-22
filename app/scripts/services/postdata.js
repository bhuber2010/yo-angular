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

    var reddit;
    var RedditPromise = redditPostPromise.$promise.then(
      function(data) {
        // console.log(data.data.children);
        var newData = data.data.children.map(function(curr){
          curr.data.created = curr.data.created * 1000;
          return curr;
        });
        return newData;
      }
    );
    console.log(reddit);

    var posts = [
      {
        title: 'Post 1',
        author: 'Brian Huber',
        image: 'no image',
        description: 'What a great day!',
        postDate: 1451675853,
        upVoteCount: 0
      },
      {
        title: 'Post 2',
        author: 'Niddy Seth',
        image: 'no image',
        description: 'I run around the world!',
        postDate: 1453403668,
        upVoteCount: 0
      },
    ];

    // Public API here
    return {
      getPosts: function() {
        return posts;
      },
      getReddit: RedditPromise,
    };
  });
