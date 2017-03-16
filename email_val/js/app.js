        var myApp = angular.module('myApp', ['ngRoute', 'myControllers'])
        .config(function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'views/email.html',
                controller: 'EmailCtrl'
            })
            .when('/home/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            
            .otherwise({redirectsTo: '/home'});
        });

//        myApp.controller('ExampleController', ['$scope', function ($scope) {
//
//            $scope.update = function (email, subject, message) {
//                console.log("email is: ", email);
//                console.log("subject is: ", subject);
//                console.log("message is: ", message);
//            };
//        }]);