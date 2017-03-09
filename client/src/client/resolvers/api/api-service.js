;(function() {
	'use strict';

	angular.module('ecommerce').constant('/resolvers/api/api-service', [
		'@lodash',
		'$q',
		'$route',
		'/models/api/api-service',
		function(_, Promise, $route, APIService) {
			var id = $route.current.params.id;
			if (!id) {
				return new APIService();
			}

			return APIService.get({
				id: id,
			});
		},
	]);
})();
