'use strict';

var cartonnApp = angular.module('cartonnApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTouch',
    'snap',
    'com.2fdevs.videogular',
    'bardo.directives',
    'FBAngular',
    'wu.masonry',
    'ngModal',
    'ui.bootstrap'
  ]);

cartonnApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/realisations', {
      templateUrl: 'views/realisations.html',
      controller: 'RealisationsCtrl'
    })
    .when('/entreprise', {
      templateUrl: 'views/entreprise.html',
      controller: 'EntrepriseCtrl'
    })
    .when('/valeurs', {
      templateUrl: 'views/valeurs.html',
      controller: 'ValeursCtrl'
    })
    .when('/outil-industriel-performant', {
      templateUrl: 'views/outil.html',
      controller: 'OutilCtrl'
    })
    .when('/pourquoi-nous-choisir', {
      templateUrl: 'views/services.html',
      controller: 'ServicesCtrl'
    })
    .when('/clients', {
      templateUrl: 'views/clients.html',
      controller: 'ClientsCtrl'
    })
    .when('/realisations/:categorId', {
      templateUrl: 'views/realisation-category.html',
      controller: 'RealisationCategoryCtrl'
    })
    .when('/realisations/:categorId/:itemId', {
      templateUrl: 'views/realisation-item.html',
      controller: 'RealisationitemCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

}])

.config(['snapRemoteProvider', function(snapRemoteProvider) {
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    maxPosition: 300,
    tapToClose: 'true'
  };
}]);