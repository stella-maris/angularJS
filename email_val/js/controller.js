var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);
    
    //Parent controller
    ctrls.controller('AppCtrl', ['$scope', function($scope) {
        $scope.title ="Assignment 2";
    }]);
    //child controller
    ctrls.controller('EmailCtrl', ['$scope', function($scope) {
        $scope.isClicked = false;
        $scope.emailVerified = false;
        $scope.update = function (email, subject, message) {
                $scope.isClicked = true;
                console.log("email is: ", email);
                console.log("subject is: ", subject);
                console.log("message is: ", message);
            if (email && subject && message) {
                $scope.emailVerified = true;
                $scope.sentEmail = email;
            }
        };
    }]);
    //child controller
    ctrls.controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.name = "Mary Lee"
    }]);
    return ctrls;
}());