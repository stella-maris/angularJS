import { Component } from '@angular/core';

// This is the service.
export class SecondService {
    temp: number;
    constructor() {
        this.temp = 6;
    }
    getFahrenheit () {
            return (this.temp * 9/5) + 32;
        }
}