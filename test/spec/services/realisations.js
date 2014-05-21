'use strict';

describe('Service: Realisations', function () {

  // load the service's module
  beforeEach(module('cartonnApp'));

  // instantiate service
  var Realisations;
  beforeEach(inject(function (_Realisations_) {
    Realisations = _Realisations_;
  }));

  it('should do something', function () {
    expect(!!Realisations).toBe(true);
  });

});
