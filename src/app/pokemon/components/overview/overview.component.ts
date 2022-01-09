import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PikachuService} from "../../services/pikachu.service";

@Component({
  selector: 'pok-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  url: string = '';

  @Input() pokemon: Pokemon | undefined;

  constructor(public pikachuService: PikachuService) {
  }

  ngOnInit() {
    this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon?.id + ".png";

  }

}
