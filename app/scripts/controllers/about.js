'use strict';

/**
 * @ngdoc function
 * @name timeDirectiveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timeDirectiveApp
 */
angular.module('timeDirectiveApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
