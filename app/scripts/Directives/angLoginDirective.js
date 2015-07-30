'use strict';

/**
@ angLogin directive a simple directive which has angLoginController as controller
@template Url fetches the view from either templatecache or from local view
 */
(function(){
angular.module('currprjApp')
		.directive('angLogin', function(){
			return {
				scope: {}, 
				templateUrl: 'views/angLogin.html',
				controller:'angLoginController'
				};		 
			});
}());