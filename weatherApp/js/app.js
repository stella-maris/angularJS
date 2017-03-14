var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('AppCtrl', ['$scope', function ($scope) {
    
    /* This data cannot be changed */
    var weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
                   {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
                   {"high":"77","low":"56","text":"Clear","cityName":"San Diego"}, 
                   {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];

    // Define title model.
    $scope.title = "AngularJS Tutorial";
   
    $scope.cityName = "cityName";
    
    $scope.getAllWeather = function() {
        console.log("I am here");
        return  weather;
    } 
    
    // Return weather to application.
    $scope.forecast = $scope.getAllWeather();
    
    
    $scope.update = function (city) {
//        console.log(weather);
        $scope.clicked = true;
        for (var i = 0; i < weather.length; i++) { 
            var sorted = weather[i].cityName;
            if (city == sorted) {
//                console.log(weather[i]);
                document.getElementById('updatedCity').innerHTML = $scope.city = weather[i].cityName;
                document.getElementById('updatedText').innerHTML = $scope.text = weather[i].text;
                document.getElementById('updatedHigh').innerHTML = $scope.high = weather[i].high;
                document.getElementById('updatedLow').innerHTML = $scope.low = weather[i].low;
            }
        }
    };
    //getTemp should retrieve temp from city that was clicked
    //should make call to getCelsius
    $scope.setTemp = "F";
    $scope.clicked = false;
    $scope.high = "";
    $scope.low = "";
    
    $scope.getTemp = function (format) {
        // Implement conversion here.
        if (!$scope.clicked){
            return ;
        }
        if (format == "C") {
            $scope.high = $scope.getCelsius($scope.high);
            $scope.low = $scope.getCelsius($scope.low);
        } else if (format == "F") {
            //change back to f
            $scope.high = $scope.getFahr($scope.high);
            $scope.low = $scope.getFahr($scope.low);
        }
        
//        alert(format + " " + $scope.city + " " + $scope.high + " " + $scope.low)
    }
    
    $scope.getCelsius = function (f) {
        var fahr = parseInt(f);
        var conversion = (fahr - 32) *5 / 9;
        return Math.round(conversion);
    }
    
    $scope.getFahr = function (c) {
        var celsius = parseInt(c);
        var conversion = (celsius * 9/5) + 32;
        return Math.round(conversion);
    }
    
    $scope.showAlert = function(city)  {
        alert("Hi from " + city);
    }
}]);