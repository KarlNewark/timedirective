'use strict';

describe('Directive: timeDirective', function () {

  // load the directive's module
  beforeEach(module('timeDirectiveApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time-directive></time-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timeDirective directive');
  }));
});
