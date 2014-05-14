'use strict';

describe('Controller: EntrepriseCtrl', function () {

  // load the controller's module
  beforeEach(module('cartonnApp'));

  var EntrepriseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntrepriseCtrl = $controller('EntrepriseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
