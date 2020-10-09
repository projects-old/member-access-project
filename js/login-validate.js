/*
  CFM Purple Army Homework Assignment
  Date: January 24, 2018

 Angular JS Validation File
*/

/* Declare Login App */
var app = angular.module('login-app', ['ngRoute']);

/* Config routes between login and splash pages */
    app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller: 'loginCtrl'
    })
    .when("/splash", {
        resolve: {
         "check": function($location, $rootScope){
             if(!$rootScope.loggedIn){
                 $location.path('/');
             }
         }
        },
        templateUrl : "splash.html",
        controller: 'logoutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

/* Activate controller when submitting login form */
app.controller('loginCtrl', function($scope, $location, $rootScope, $routeParams) {
    $scope.username = $routeParams.username;
    $scope.submit = function(){
        if($scope.username === 'uname' && $scope.password === 'pass'){
            $rootScope.loggedIn = true;
            $location.path('/splash');
        } 
        else {
           //alert("Incorrect Username or Password!");
           $scope.errorMsg = "Incorrect Username or Password!";
        }
    };
});

app.controller('logoutCtrl', function($scope, $location){
   $scope.signOut = function(){
      $location.path('/home');
  }; 
});