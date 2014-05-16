'use strict';

cartonnApp
.controller('NavigationCtrl', ['$scope', '$location', '$http',  function ($scope, $location, $http) {
    //recup des contenus
    $http.get('/contenu.json').success(function(data) {
      $scope.pages = data;
    });
    // classe active
    $scope.isActive = function(page) {
      if (page.path === $location.path()) {
        return true;
      }
      return false;
    };
  }]);