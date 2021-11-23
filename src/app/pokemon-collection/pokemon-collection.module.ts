import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonCollectionPageRoutingModule } from './pokemon-collection-routing.module';

import { PokemonCollectionPage } from './pokemon-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonCollectionPageRoutingModule
  ],
  declarations: [PokemonCollectionPage]
})
export class PokemonCollectionPageModule {}
