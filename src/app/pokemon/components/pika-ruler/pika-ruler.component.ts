import {Component, Input, OnInit} from '@angular/core';
import {PikachuService} from "../../services/pikachu.service";
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'pok-pika-ruler',
  templateUrl: './pika-ruler.component.html',
  styleUrls: ['./pika-ruler.component.scss']
})
export class PikaRulerComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;

  pikaHeightRound: number = 0;

  pikachusHeight: number = 0;

  cutoff: number = 0;


  constructor(public pikachuService: PikachuService) {
  }

  ngOnInit() {
    if (this.pokemon) {
      this.pikachusHeight = 400 / this.pikachuService.getHeightInPickachus(this.pokemon.height);

      if (this.pikachusHeight > 200) {
        this.pikachusHeight = 200;
      }

      this.pikaHeightRound = Math.floor(this.pikachuService.getHeightInPickachus(this.pokemon.height));

      this.cutoff = 100 - (this.pikachuService.getHeightInPickachus(this.pokemon.height) - this.pikaHeightRound) * 100;
    }

    document.getElementById("first")?.setAttribute('style', `clip-path: ${'inset(' + this.cutoff + '% 0 0 0)'}`);
  }

}
