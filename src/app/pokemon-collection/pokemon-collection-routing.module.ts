import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPage } from './details/details.page';

import { PokemonCollectionPage } from './pokemon-collection.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonCollectionPageRoutingModule {}
