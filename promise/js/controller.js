var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);

    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', 'cardService',
        function ($scope, cardService) {
            $scope.title = "AngularJS Tutorial";

            var promise  = cardService.getCards();
            var promise2 = cardService.getNums();
            promise.then(
                // Enter this block if successful
                function (data) {
                    $scope.cards = data;
                },
                // Enter this block if error!
                function (errorReason) {
                    $scope.error = true;
                    $scope.msg = "An error occurred while fetching data.";
                    console.log(errorReason);
                });


            $scope.getPlayingCard = function (cardNum, suit) {
                $scope.card = cardService.getCard(cardNum, suit);
            }
            promise2.then(
                // Enter this block if successful
                function (data) {
                    $scope.nums = data;
                },
                // Enter this block if error!
                function (errorReason) {
                    $scope.error = true;
                    $scope.msg = "An error occurred while fetching numbers.";
                    console.log(errorReason);
                });
        }]);

    return ctrls;
}());
