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
    
    
    $scope.update = function (city) {
//        console.log(weather);
        for (var i = 0; i < weather.length; i++) { 
            var sorted = weather[i].cityName;
            if (city == sorted) {
                console.log(weather[i]);
                document.getElementById('updatedCity').innerHTML = $scope.city = weather[i].cityName;
                document.getElementById('updatedText').innerHTML = $scope.text = weather[i].text;
                document.getElementById('updatedHigh').innerHTML = $scope.high = "High: " + weather[i].high;
                document.getElementById('updatedLow').innerHTML = $scope.low = "Low: " + weather[i].low;
            }
        }
    };
    
    $scope.celsius = function () {
        
    }
    
    $scope.showAlert = function(city)  {
        alert("Hi from " + city);
    }
}]);