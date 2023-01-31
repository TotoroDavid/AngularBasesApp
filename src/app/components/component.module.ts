import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesModule } from './heroes/heroes.module';
import { CounterComponent } from './counter/counter.component';
import { DbzComponent } from './dbz/dbz.component';
import { CharactersComponent } from './dbz/characters/characters.component';
import { AddComponent } from './dbz/add/add.component';
import { DbzService } from './dbz/services/dbz.service';


@NgModule({
    declarations: [ //components!!!
        CounterComponent,
        DbzComponent,
        CharactersComponent,
        AddComponent,
    ],
    imports: [ //modules
        CommonModule,
        HeroesModule,
        FormsModule

    ],
    exports: [ //export the Component or modules
        CounterComponent,
        HeroesModule,
        DbzComponent,
        CharactersComponent,
        AddComponent

    ],
    providers: [
        DbzService
    ],
})
export class ComponentModule { }


//I have to declare and after that export thar as well 
//I have to export the module as well only I have to import in the app.module the other I have to export

