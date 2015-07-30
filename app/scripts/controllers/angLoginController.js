'use strict';

/**
 * @ngdoc function
 * @name currprjApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the currprjApp
 */
angular.module('currprjApp')
  .controller('angLoginController', function ($scope) {
  	
  	$scope.checkDb = function (){
  		var username =$scope.name;
		 function userExistsCallback(username, exists) {
			  if (exists) {
			    alert('user ' + username + ' exists!');
			  } else {
			    alert('user ' + username + ' does not exist!');
			  }
			}
		  // firebase url for checking the sign in of the users
		  var usersRef = new Firebase('https://currprjlogindb.firebaseio.com/users');
			usersRef.child(username).once('value', function(snapshot) {
			    var exists = (snapshot.val() !== null);
			    userExistsCallback(username, exists);
			}); 	
  		}
  	

	  	// jquery  Toggle Function part have to change in angular
		$('.toggle').click(function(){
		  // Switches the Icon
		  $(this).children('i').toggleClass('fa-pencil');
		  // Switches the forms  
		  $('.form').animate({
		    height: "toggle",
		    'padding-top': 'toggle',
		    'padding-bottom': 'toggle',
		    opacity: "toggle"
		  }, "slow");
		});
  });
