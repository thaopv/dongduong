;(function() {
	'use strict';

	angular.module('ecommerce').constant('/resolvers/api/api-generate', [
		'@lodash',
		'$q',
		'/models/api/api-generate',
		function(_, Promise, APIGenerate) {
			return APIGenerate.get();
		},
	]);
})();
