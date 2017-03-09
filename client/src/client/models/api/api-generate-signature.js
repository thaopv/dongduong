;(function() {
	'use strict';

	angular.module('ecommerce').factory('/models/api/api-generate-signature', [
		'/services/model-factory',
		'/services/api-factory',
		function(ModelFactory, api) {
			var APIGenerate = ModelFactory.model({
				resource: {
					path: api.authorAPI('apiclient/generate/signature'),
					methods: {
						query: false,
						delete: false,
						get: false,
						update: false
					},
				},

			});

			return APIGenerate.class;
		},
	]);
})();
