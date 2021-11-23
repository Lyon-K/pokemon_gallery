import { Component, OnInit } from '@angular/core';

import { ICard } from '../ICard';
import { PokemonIndexService } from '../pokemon-index.service';

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.page.html',
  styleUrls: ['./pokemon-collection.page.scss'],
})
export class PokemonCollectionPage implements OnInit {
  offset: number = 0;
  currentID: number = 1;
  pokemonCards: ICard[] = [];
  constructor(private pokemonIndexService: PokemonIndexService) { }

  ngOnInit() {
    this.getPokemonCards();
  }

  getPokemonCards(): void {
    let pokemonsData: any[];
    this.pokemonIndexService.getPokemonList(this.offset).subscribe((pokemonsData: any[]) => {
      for(let pokemon of pokemonsData['results']){
        this.pokemonIndexService.getPokemonDetail(++this.offset).subscribe((pokemonDetail: any[]) => {
          this.pokemonCards.push({
            id: pokemon.url.split('/')[6],
            name: pokemon.name,
            photo: pokemonDetail['sprites']['front_default']
          });
        })
      }
    });
  }
}
