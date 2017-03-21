
import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { HomeComponent } from './app.home';

@Component({
    templateUrl: './app/detail.html'
})
export class DetailComponent {
    id:number;
    name:string;
    mfg: string;
    pkg: string;
    qty: number;
    

    constructor(private route: ActivatedRoute, homeComponent: HomeComponent) {
        for (var i = 0; i < homeComponent.items.length; i++) {
            console.log(homeComponent.items[i]);
            // this.mfg = homeComponent.items[i].mfg;
            // this.pkg = homeComponent.items[i].pkg;
            // this. qty = homeComponent.items[i].qty;
        }
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID    = params['id'];
            let localName  = params['name'];
            
            this.id        = localID;
            this.name = localName;
            //if localID, then loop through FoodItem[] - for obj in key?

        });
    }
}

