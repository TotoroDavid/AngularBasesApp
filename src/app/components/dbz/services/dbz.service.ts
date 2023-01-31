import { Injectable } from '@angular/core';
import { Character } from '../dbz.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    private _characters: Character[] = [
        {
            name: 'Radiz',
            power: 1000
        },
        {
            name: 'piccoro',
            power: 20000
        }
    ]

    get characters(): Character[] {
        return [...this._characters]
    }


    addCharacter(character: Character) {
        this._characters.push(character)
    }

}