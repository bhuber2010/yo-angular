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
    this.posts = postdata.getPosts();

    postdata.getReddit.then(function(data){
      console.log(data);
      that.redditData = data;
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
      }
    };

    this.upVotePost = function(post) {
      post.data.score++;
    };
    this.downVotePost = function(post) {
      post.data.score--;
    };
  });
