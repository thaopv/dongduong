;(function() {
	'use strict';

	angular.module('ecommerce').directive('handleMenu', [
		'@lodash',
		'@jquery',
		function(_, $) {
			return {
				link: function($scope, element, attrs) {
					var menuActive = 'menu__active';
					var menuList = 'menu-list';
					var subMenuList = 'sub-menu-list';
					var hiddenClass = 'hidden';

					var hiddenAllSubMenu = function() {
						$('.' + subMenuList).addClass(hiddenClass);
					};

					var activeSubmenu = function(idSubMenu) {
						hiddenAllSubMenu();

						if (!idSubMenu) {
							return;
						}

						$('#' + idSubMenu).removeClass(hiddenClass);
					};

					var activeMenu = function(idSubMenu) {
						activeSubmenu(idSubMenu);
					};

					var removeMenuActive = function() {
						$('.' + menuList).removeClass(menuActive);
					};

					var menuActiveElement = function() {
						element.addClass(menuActive);
					};

					var isActive = function() {
						return element.hasClass(menuActive);
					};

					var handleClickEvent = function() {
						if (isActive()) {
							return;
						}

						removeMenuActive();
						menuActiveElement();

						activeMenu(attrs.handleMenu);
					};

					element.bind('click', handleClickEvent);

					$scope.$on('$destroy', function() {
						element.unbind('click');
					});
				},
			};
		},
	]);
})();
