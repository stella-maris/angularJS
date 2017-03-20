"use strict";
var router_1 = require('@angular/router');
var app_home_1 = require('./app.home');
var app_about_1 = require('./app.about');
var app_pagedefault_1 = require('./app.pagedefault');
var appRoutes = [
    { path: 'home', component: app_home_1.HomeComponent },
    { path: 'about', component: app_about_1.AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: app_pagedefault_1.PageDefault }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map