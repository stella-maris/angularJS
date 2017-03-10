cardApp.factory("temperatureService", function () {
    return {
        getCelsius: function (f) {
            return (f - 32) * 5 / 9;
        },
    }
});