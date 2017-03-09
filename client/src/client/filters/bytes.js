;(function() {
	'use strict';

	angular.module('ecommerce').filter('bytes', [
		'$sce',
		function($sce) {
			return function(bytes, precision) {
				if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
					return '-';
				}

				if (typeof precision === 'undefined') {
					precision = 1;
				}

				var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
				var number = bytes ? Math.floor(Math.log(bytes) / Math.log(1024)) : 0;

				return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
			};
		},
	]);
})();
