import { Component, OnInit } from '@angular/core';
import { Character } from './dbz.interface';
import { DbzService } from './services/dbz.service';


@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
})
export class DbzComponent {

  newCharacter: Character = {
    name: '',
    power: 0
  }

}















