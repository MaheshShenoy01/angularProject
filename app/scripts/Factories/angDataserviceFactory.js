'use strict';

(function(){

var angDataServiceFactory = function($http,$q){
	var defer =$q.defer();


	return {
	getAngData :function(){
							  $http.get("/angLocalData/angData.json")
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



angular.module('currprjApp').factory('angDataServiceFactory',angDataServiceFactory);

}());