'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('NewpostCtrl', function (postdata) {
    this.defaultPic = 'http://goo.gl/L8tNf7';
    this.savePost = function(post, newPostForm) {
      if (newPostForm.$valid) {
        console.log(post);
        post.data.score = 0;
        postdata.postFakeReddit(post);
        window.location = '/#/posts';
      } else {
        console.log('form not valid');
      }
    };
    this.cancelEdit = function() {
      window.location = '/#/posts';
    };
  });
