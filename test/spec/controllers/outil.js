'use strict';

describe('Controller: OutilCtrl', function () {

  // load the controller's module
  beforeEach(module('cartonnApp'));

  var OutilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OutilCtrl = $controller('OutilCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
