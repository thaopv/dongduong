;(function() {
	'use strict';

	angular.module('ecommerce').factory('/models/api/api-service', [
		'/services/model-factory',
		'/services/api-factory',
		function(ModelFactory, api) {
			var APIService = ModelFactory.model({
				resource: {
					path: api.authorAPI('apiclient/:id'),
					defaultParameters: {
						id: '@id',
					},
				},

			});

			return APIService.class;
		},
	]);
})();
