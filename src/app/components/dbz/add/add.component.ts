import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})

export class AddComponent {

  @Input //children received
    ('newCharacterChildren') newCharacter: Character = {
      name: '',
      power: 0
    }

  // @Output() // children share
  // onNewCharacter: EventEmitter<Character> = new EventEmitter()

  constructor(
    private dbzService: DbzService
  ) { }

  addNewCharacter() {

    if (this.newCharacter.name.trim().length === 0) {
      return
    }

    // this.onNewCharacter.emit(this.newCharacter)
    this.dbzService.addCharacter(this.newCharacter)

    this.newCharacter = { //declare the new state in my form, be clean
      name: '',
      power: 0
    }

  }

}
