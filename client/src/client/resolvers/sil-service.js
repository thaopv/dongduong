;(function() {
	'use strict';

	angular.module('ecommerce').constant('/resolvers/sil-service', [
		'@lodash',
		'$q',
		'$route',
		'/models/sil-service',
		function(_, Promise, $route, SILService) {
			var id = $route.current.params.id;

			if (!id) {
				return new SILService();
			}

			return SILService.get({
				id: id
			});
		},
	]);
})();
