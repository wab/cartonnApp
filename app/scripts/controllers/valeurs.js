'use strict';

cartonnApp.controller('ValeursCtrl', ['$scope', 'Pages', 'ngDialog',
  function($scope, Pages, ngDialog) {

    Pages.getData(function(data) {
      console.log('data loaded');
      $scope.page = data.valeurs;
    });

    $scope.slickConfig = {

      arrows: false

    };

    $scope.slickHandle = {

    };

    $scope.clickToOpen = function(img) {
      var image = '<img src="' + img + '" class="img-responsive" />';
      ngDialog.open({
        template: image,
        plain: true
      });
    };

    // classe active
    $scope.islideActive = function(slide, scope, element, attrs) {

      var activeSlide = angular.element('.slick-active').attr('data-id');
      $scope.active = activeSlide;

      if (slide.id === activeSlide) {
        return true;
      }
      return false;
    };

  }
]);