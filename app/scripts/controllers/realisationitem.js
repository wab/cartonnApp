'use strict';

angular.module('cartonnApp')
  .controller('RealisationitemCtrl', function ($scope, $routeParams, $http) {
      $http.get('realisations/' + $routeParams.itemId + '.json').success(function(data) {
      $scope.item = data;
    });
  });
