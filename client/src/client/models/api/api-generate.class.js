;(function() {
	'use strict';

	angular.module('ecommerce').factory('/models/api/api-generate', [
		'/services/model-factory',
		'/services/api-factory',
		function(ModelFactory, api) {
			var APIGenerate = ModelFactory.model({
				resource: {
					path: api.authorAPI('apiclient/generate'),
					methods: {
						query: false,
						delete: false,
						save: false,
						update: false
					},
				},

			});

			return APIGenerate.class;
		},
	]);
})();
