import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['SpiderMan', 'thor', 'IronMam', 'Hulk', 'AntMan']
  deleteHero: string = '' // comment_1

  getDeleting() {

    this.deleteHero = this.heroes.shift() || ''

  }

}

/** comment_1
I put "" and my ngIf will to know when the string is empty that the same that false o null o undefine 
*ngIf="deleteHero"> that why I put this conditional in my html if deleteHero has something in "" is true if not false
 */