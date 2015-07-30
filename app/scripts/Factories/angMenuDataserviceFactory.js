'use strict';

(function(){

var angMenuDataServiceFactory = function($http,$q){
	var defer =$q.defer();
	return {
	getAngMenuData:function(){
							  $http.get("/angLocalData/angMenuData.json")
					        		.then(function(response) {
					        			    
					                        if (typeof response.data === 'object') {

					                            defer.resolve(response.data);
					                        } else {
					                            // invalid response
					                           defer.reject(response.data);
					                        }

					                    }, function(response) {
					                        // something went wrong
					                        defer.reject(response.data);
					                    });
					        		
					        		 return defer.promise;
						  }   	
	  		}
	}



angular.module('currprjApp').factory('angMenuDataServiceFactory',angMenuDataServiceFactory);

}());