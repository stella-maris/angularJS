"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myDataService_1 = require('./myDataService');
var FoodItem = (function () {
    function FoodItem() {
    }
    return FoodItem;
}());
exports.FoodItem = FoodItem;
var HomeComponent = (function () {
    // Create instance of 'MyDataService' right in the constructor
    // header.
    function HomeComponent(myDataService) {
        this.items = FOODITEMS;
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
    }
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home.html',
            providers: [myDataService_1.MyDataService]
        }), 
        __metadata('design:paramtypes', [myDataService_1.MyDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
// Define food data.
// var FOODITEMS: FoodItem[] = [
//     { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 kg", qty: 6 },
//     { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 kg", qty: 14 },
//     { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 kg", qty: 20 },
//     { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 kg", qty: 8 }
// ];
//# sourceMappingURL=app.home.js.map