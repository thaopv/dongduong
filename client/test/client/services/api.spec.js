'use strict';
describe('API service test', function() {
	var api;

	beforeEach(function() {
		mock.mockModule();
	});

	describe('api root path is null', function() {
		beforeEach(function() {
			mock.mockConstant('/data/config', {
				api: {
					rootPath: 'http://13.95.218.199:8080/api/',
				},
			});

			api = mock.getInject('/services/api');
		});

		it('api service not null', function() {
			expect(api).not.toBeNull();
		});

		it('input api name is null, return root path config', function() {
			expect(api('')).toBe('http://13.95.218.199:8080/api/');
		});

		it('input api name is not null, return concat root path config and api name', function() {
			expect(api('user')).toBe('http://13.95.218.199:8080/api/user');
		});
	});
});
