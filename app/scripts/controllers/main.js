'use strict';
/**
 * @ngdoc function
 * @name currprjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the currprjApp
 */
angular.module('currprjApp')
    .controller('MainCtrl', ['$scope', 'angDataServiceFactory', 'angMenuDataServiceFactory', function($scope, angDataServiceFactory, angMenuDataServiceFactory) {
        angDataServiceFactory.getAngData()
            .then(function(response) {
                $scope.angDatas = response.data;
            }, function(error) {
                console.log(error + "promise rejected due to error");
            });

        $scope.currIndex = 0; 
        $scope.Clicked = function($index) {
            $scope.selectedIndex = $index;
        };


        angMenuDataServiceFactory.getAngMenuData()
            .then(function(response) {
                $scope.angMenuDatas = response.data;
            }, function(error) {
                console.log(error + "promise rejected due to error");
            });


    }]);

