'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('PostCtrl', function (postdata) {
    var that = this;

    postdata.getReddit.then(function(data){
      // console.log(data);
      // console.log(postdata.newPosts);
      var combinedPosts = data.concat(postdata.newPosts);
      console.log(combinedPosts);
      that.redditData = combinedPosts;

    });

    this.defaultSortOrder = '-data.score';
    this.sortorder = {
      score: {
        name: 'score',
        sort: '-data.score'
      },
      dateCreated: {
        name: 'Date Created',
        sort: '-data.created'
      },
      title: {
        name: 'Title',
        sort: 'data.title'
      },
      comments: {
        name: '# of Comments',
        sort: '-data.comments'
      }
    };

    this.upVotePost = function(post) {
      post.data.score++;
    };
    this.downVotePost = function(post) {
      post.data.score--;
    };

    this.submitComment = function(post, newComment) {
      console.log(newComment);
      post.data.comments.push(newComment);
      post.newComment = {};
    };

  });
