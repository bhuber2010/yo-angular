'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('NewpostCtrl', function () {
    this.defaultPic = 'http://goo.gl/L8tNf7';
    this.savePost = function(post) {
      console.log(post);
    };
    this.cancelEdit = function() {
      window.locaiton = '/posts.html';
    };
  });
