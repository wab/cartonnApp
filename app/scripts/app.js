'use strict';

angular
  .module('cartonnApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'slick'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/realisations', {
        templateUrl: 'views/realisations.html',
        controller: 'RealisationsCtrl'
      })
      .when('/realisations/:itemId', {
        templateUrl: 'views/realisationitem.html',
        controller: 'RealisationitemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
