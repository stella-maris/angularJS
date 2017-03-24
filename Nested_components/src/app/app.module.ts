import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewDirective }  from './NewDirective';
import { ThirdDirective }  from './ThirdDirective';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, NewDirective, ThirdDirective ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
