import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'third-directive',
    template: `<h3>Hello from the third directive! {{bookTitle}}</h3>`,
})
export class ThirdDirective {
    @Input()
    bookTitle: string;
}