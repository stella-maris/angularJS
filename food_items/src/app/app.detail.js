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
var router_1 = require('@angular/router');
var app_home_1 = require('./app.home');
var DetailComponent = (function () {
    function DetailComponent(route, homeComponent) {
        this.route = route;
        for (var i = 0; i < homeComponent.items.length; i++) {
            console.log(homeComponent.items[i]);
        }
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var localID = params['id'];
            var localName = params['name'];
            _this.id = localID;
            _this.name = localName;
            //if localID, then loop through FoodItem[] - for obj in key?
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/detail.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, app_home_1.HomeComponent])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=app.detail.js.map