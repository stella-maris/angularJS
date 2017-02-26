// Register our controller with the angular module.
var cardApp = angular.module('cardApp', []);

// The controller is a constructor function.
// In this case the controller takes a $scope parameter.
// Scope lets us establish data binding between the controller and the view.
cardApp.controller('MainController', ['$scope', function ($scope) {
    // Scope ensures that any changes to the 
    // model are reflected in the controller.
    // Here we create an initialize a 'greeting' model.
    $scope.greeting = "AngularJS Hello World!";
}]);