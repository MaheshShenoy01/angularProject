'use strict';

(function(){
 
	angular.module('currprjApp')
    .controller('angShoppingCartPanelController', ['$scope','angShoppingCartDataFactory', function($scope,angShoppingCartDataFactory) {
        angShoppingCartDataFactory.getAngScData()
            .then(function(response) {
                 
                

                $scope.snacks = response.snacks;
				$scope.fruits = response.fruits;
                $scope.qty=[];
                angular.forEach(response.fruits,function(val,key){
                    $scope.qty.push(val);
                   
                });
                
                $scope.vegetables = response.vegetables;
                $scope.Groceries = response.Groceries;    

            }, function(error) {
                console.log(error + "promise rejected due to error");
            });
    }]);

}());