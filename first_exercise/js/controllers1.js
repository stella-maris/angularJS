// Register our controller with the angular module.
//Below doesn't make too much sense, just accept
var cardApp = angular.module('cardApp', []);

// Scope lets us establish data binding between the controller and the view.
cardApp.controller('MainController', ['$scope', function ($scope) {
    // Scope ensures that any changes to the
    // model are reflected in the controller.
    // Here we create an initialize a 'greeting' model.
    $scope.greeting = "AngularJS Hello World!";
    $scope.subTitle = "AngularJS Intro";
    console.log($scope.greeting);
}]);
