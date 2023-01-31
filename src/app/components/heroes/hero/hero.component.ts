import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    name: string = 'ironMan'
    age: number = 45

    get uppercaseName() {
        return this.name.toUpperCase()
    }

    getName(): string {
        return `${this.name} - ${this.age}`
    }

    changeName(): void {
        this.name = 'SpiderMan'
    }

    changeAge(): void {
        this.age = 100
    }

}
