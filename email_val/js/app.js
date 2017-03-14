        var myApp = angular.module('myApp', []);
        myApp.controller('ExampleController', ['$scope', function ($scope) {

            $scope.update = function (email, subject, message) {
                console.log("email is: ", email);
                console.log("subject is: ", subject);
                console.log("message is: ", message);
            };
        }]);