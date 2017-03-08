var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {
    
    /* This data cannot be changed */
    var weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
                   {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
                   {"high":"77","low":"56","text":"Clear","cityName":"San Diego"}, 
                   {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];

    // Define title model.
    $scope.title = "AngularJS Tutorial";
   
    $scope.orderProp = "cityName";
    
    $scope.getAllWeather = function() {
        console.log("I am here");
        return  weather;
    } 
    
    // Return weather to application.
    $scope.forecast = $scope.getAllWeather();
    
    
    $scope.update = function () {
        console.log(weather);
        for (var i = 0; i < weather.length; i++) {
            var sorted = weather[i].cityName.sort();
            console.log(sorted);
            console.log(sorted.reverse());
        }
    };
    
    $scope.showAlert = function(city)  {
        alert("Hi from " + city);
    }
}]);