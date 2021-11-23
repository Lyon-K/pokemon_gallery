import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { PokemonIndexService } from '../../pokemon-index.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  providers: [SocialSharing],
})

export class DetailsPage implements OnInit {
  images: string[] = [];
  moves: string[][] = [];
  name: string;
  imageMain: string;
  id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(
    private route: ActivatedRoute,
    private pokemonIndexService: PokemonIndexService,
    private socialSharing: SocialSharing,
  ) { }

  ngOnInit() {
    this.getPokemonDetails();
  }
  
  getPokemonDetails(): void {
    this.pokemonIndexService.getPokemonDetail(this.id).subscribe((pokemonDetail: any[]) => {
      this.name = pokemonDetail['name'];
      this.imageMain = pokemonDetail["sprites"]['front_default'];
      this.findAllImages(pokemonDetail["sprites"]);
      this.findAllMoves(pokemonDetail["moves"]);
    });
  }

  findAllImages(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            this.findAllImages(obj[key]);
        } 
        else {
          if(this.images.indexOf(obj[key]) === -1)  this.images.push(obj[key]);
        }
    }
  }

  findAllMoves(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        this.findAllMoves(obj[key]);
      } 
      else if(key === 'name'){
        if(this.moves.map((ele) => ele[0]).indexOf(obj[key]) === -1){
          let tempArr: string[] = [];
          tempArr.push(obj[key]);
          tempArr.push(obj["url"]);
          this.moves.push(tempArr);
        }
      }
    }
  }
  shareTwitter(): void {
    this.socialSharing.shareViaTwitter(`Check out this ${this.name}`, this.imageMain, `https://pokeapi.co/api/v2/pokemon/${this.id}/`);
  }

  shareEmail(): void {
    // this.socialSharing.shareViaEmail();
  }

  shareFacebook(): void {
    this.socialSharing.shareViaFacebook(`Check out this ${this.name}`, this.imageMain, `https://pokeapi.co/api/v2/pokemon/${this.id}/`);
  }

  shareWhatsapp(): void {
    this.socialSharing.shareViaWhatsApp(`Check out this ${this.name}`, this.imageMain, `https://pokeapi.co/api/v2/pokemon/${this.id}/`);
  }

}
