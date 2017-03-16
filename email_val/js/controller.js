var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);
    
    //Parent controller
    ctrls.controller('AppCtrl', ['$scope', function($scope) {
        $scope.title ="Assignment 2";
    }]);
    
    ctrls.controller('EmailCtrl', ['$scope', function($scope) {
        $scope.update = function (email, subject, message) {
                console.log("email is: ", email);
                console.log("subject is: ", subject);
                console.log("message is: ", message);
        };
    }]);
    
    ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.name = "Mary Lee"
    }]);
    return ctrls;
}());