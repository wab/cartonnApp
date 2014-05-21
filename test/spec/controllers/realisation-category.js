'use strict';

describe('Controller: RealisationCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('cartonnApp'));

  var RealisationCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealisationCategoryCtrl = $controller('RealisationCategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
