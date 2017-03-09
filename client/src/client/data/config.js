;(function() {
	'use strict';

	angular.module('ecommerce').constant('/data/config', {
		api: {
			rootPath: 'http://192.168.6.215:9091/api/',
		},
		path: {
			deploy: 'project-base/',
		},
		timer: {
			timeout: 1000,
		},
		validation: {
			specials: /([^a-zA-Z0-9_-\s])/i,
			spaces: /([\s])+/i,
		},
		key: {
			session: 'session',
		},
		header: {
			authorization: 'X-Authorization',
		},
	});
})();
