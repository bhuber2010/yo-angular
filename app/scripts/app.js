'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl',
        controllerAs: 'posts'
      })
      .when('/newpost', {
        templateUrl: 'views/newpost.html',
        controller: 'NewpostCtrl',
        controllerAs: 'newpost'
      })
      .when('/omdb', {
        templateUrl: 'views/omdb.html',
        controller: 'OmdbCtrl',
        controllerAs: 'omdb'
      })
      .when('/omdb/:movieID', {
        templateUrl: 'views/movie.html',
        controller: 'OmdbCtrl',
        controllerAs: 'omdb'
      })
      .when('/shopping', {
        templateUrl: 'views/shopping.html',
        controller: 'ShoppingCtrl',
        controllerAs: 'shopping'
      })
      .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });
