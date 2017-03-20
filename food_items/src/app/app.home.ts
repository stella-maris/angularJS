import { Component } from '@angular/core';

export class FoodItem {
    id: number;
    name: string;
}

@Component({
    templateUrl: './app/home.html'
})
export class HomeComponent {
        public items = FOODITEMS; 
    selectedCard: FoodItem;
	
    onSelect(item: FoodItem) { 
        //console.log(this);
        this.selectedCard = item;
        alert(item.name);
    }
 }
// Define card data.
var FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 kg", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 kg", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 kg", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 kg", qty: 8 }
];


