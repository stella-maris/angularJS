"use strict";
// This is the service.
var MyDataService = (function () {
    function MyDataService() {
        this.names = ['John', 'Mary', 'Joan'];
    }
    MyDataService.prototype.getNames = function () {
        return this.names;
    };
    return MyDataService;
}());
exports.MyDataService = MyDataService;
//# sourceMappingURL=myDataService.js.map