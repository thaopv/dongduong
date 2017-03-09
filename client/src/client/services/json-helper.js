;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/json-helper', [
		function() {
			var self = {};

			self.jsonParse = function(input) {
				try {
					input = JSON.parse(input);
				} catch (err) {
					input = undefined;
				}

				return input;
			};

			return self;
		},
	]);
})();
