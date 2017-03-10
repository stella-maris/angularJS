var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []);


    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', 'cardService',
        function ($scope, cardService) {
            $scope.title = "AngularJS Tutorial";

            $scope.cards = cardService.getCards();

            $scope.getPlayingCard = function (cardNum, suit) {
                $scope.card = cardService.getCard(cardNum, suit);
            }
        }]);
    ctrls.controller('AppCtrl', ['$scope', 'temperatureService',
        function ($scope, temperatureService) {
            $scope.getTemp = function (temp) {
                $scope.fahr = temperatureService.getCelsius(temp);
            };


        }]);

    return ctrls;
}());
