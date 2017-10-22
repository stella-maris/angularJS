import { Component } from '@angular/core';
import { MyDataService } from './myDataService';

export class FoodItem {
    id: number;
    name: string;
}

@Component({
    templateUrl: './app/home.html',
    providers: [MyDataService]
})
export class HomeComponent {
    public items = FOODITEMS; 
    selectedCard: FoodItem;
	names: Array<any>;
    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
    }

 }
// Define food data.
var FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 kg", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 kg", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 kg", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 kg", qty: 8 }
];


