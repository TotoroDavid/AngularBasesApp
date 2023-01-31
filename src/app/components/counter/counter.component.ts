import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    title: string = 'counter-App'
    number: number = 10
    base: number = 5


    value(value: number) {
        this.number += value
    }

}
