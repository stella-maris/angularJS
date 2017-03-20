import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:   
      `<h1>This is the header</h1>
    <nav>
    <a routerLink="/home" routerLinkActive="active">A</a> |
    <a routerLink="/about" routerLinkActive="active">B</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }
