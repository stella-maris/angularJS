
import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

@Component({
    template: `Product ID: {{id}}<br/>
               Product Name: {{name}}<br/>
               Manufacturer:{{mfg}}<br/>
               Quantity: {{qty}}<br/>
               Pack Size: {{pkg}}`
})
export class DetailComponent {
    id:number;
    name:string;
    mfg: string;
    pkg: string;
    qty: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID    = params['id'];
            let localName  = params['name'];
            this.id        = localID;
            this.name = localName;
        });
    }
}
