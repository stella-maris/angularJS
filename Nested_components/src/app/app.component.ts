import { Component } from '@angular/core';
import { MyDataService } from "./myDataService";
import { SecondService } from "./secondService";

@Component({
  selector: 'my-app',
  template: `<h1>Hello world!  {{title}}</h1><second-directive [firstName]="author"></second-directive>
            <ul><li *ngFor="let name of names">{{name}}</li></ul>
            <h2>{{myName}}</h2>
            <div>6 degrees Celsius is {{temp}} degrees Fahrenheit.</div>`,
  providers: [MyDataService, SecondService]
})
export class AppComponent  { 
  public title = 'This is Angular2';
  public author = "James Joyce";
  names: Array<any>;

      // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService, secondService: SecondService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.myName = myDataService.getMyName();
        this.temp = secondService.getFahrenheit();
    }
 }
