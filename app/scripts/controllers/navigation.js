'use strict';

cartonnApp.controller('NavigationCtrl', ['$scope', '$location', 'Pages',  function ($scope, $location, Pages) {
    Pages.getData(function(data) {
    console.log('data loaded');
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