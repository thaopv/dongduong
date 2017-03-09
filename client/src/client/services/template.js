;(function() {
	'use strict';

	angular.module('ecommerce').constant('/services/template', function(template) {
		return '/src/client/views/' + template + '.tpl.html';
	});

	angular.module('ecommerce').constant('/services/partial', function(partial) {
		return '/src/client/components/' + partial + '.tpl.html';
	});
})();
