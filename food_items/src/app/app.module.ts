import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { HomeComponent } from './app.home';
import { AboutComponent } from './app.about';
import { routing }        from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PageDefault,
        HomeComponent, AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }