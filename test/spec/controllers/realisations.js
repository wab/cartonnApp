'use strict';

describe('Controller: RealisationsCtrl', function () {

  // load the controller's module
  beforeEach(module('cartonnApp'));

  var RealisationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealisationsCtrl = $controller('RealisationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
