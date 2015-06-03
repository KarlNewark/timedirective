'use strict';

/**
 * @ngdoc directive
 * @name timeDirectiveApp.directive:timeDirective
 * @description
 * # timeDirective
 */
angular.module('timeDirectiveApp')
  .directive('timeDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      scope: {
      	format: "="
      },

      link: function postLink(scope, element, attrs) {
      	
		setInterval(function(){

	      	var time = new Date();

			var h = time.getHours();
	    	var m = time.getMinutes();
	    	var s = time.getSeconds();

	      	if (scope.format === "h-m-s") {

				time = h+':'+m+':'+s;

			}

			else if (scope.format === "h-m") {

				time = time = h+':'+m;

			} else	{

				time = "Please enter valid time format";

			};

	        element.text(time);

        }, 1000);


      }
    };
  });
