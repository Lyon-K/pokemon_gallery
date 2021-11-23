import { Component, OnInit, Input } from '@angular/core';

import { ICard } from '../ICard';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})

export class PokemonCardComponent implements OnInit {
  @Input() card?: ICard;

  constructor() { }

  ngOnInit() {}

  
}