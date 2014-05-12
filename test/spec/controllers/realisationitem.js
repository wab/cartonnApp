'use strict';

describe('Controller: RealisationitemCtrl', function () {

  // load the controller's module
  beforeEach(module('cartonnApp'));

  var RealisationitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealisationitemCtrl = $controller('RealisationitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
