;(function() {
	'use strict';

	angular.module('ecommerce').constant('/data/status-code', {
		success: 200,
		dataCreated: 201,
		dataDeleted: 204,
		badRequest: 400,
		unauthorized: 401,
		forbidden: 403,
		notFound: 404,
		idExist: 409,
		userDisabled: 423,
		internalError: 500,
	});
})();
