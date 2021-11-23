import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonIndexService {

  constructor(private httpClient: HttpClient) { }

  public getPokemonList(offset: number){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`);
  }

  public getPokemonDetail(id: number){
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);;
  }
}
