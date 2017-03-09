;(function() {
	'use strict';

	angular.module('ecommerce').factory('/services/storage', [
		'$cookies',
		'/services/json-helper',
		function($cookies, jsonHelper) {
			var self = {};

			self.get = function(key) {
				var data = $cookies.get(key);
				return jsonHelper.jsonParse(data);
			};

			self.getAll = function() {
				return $cookies.getAll();
			};

			self.put = function(key, value) {
				$cookies.putObject(key, value);
			};

			self.clear = function(key) {
				$cookies.remove(key);
			};

			return self;
		},
	]);
})();
