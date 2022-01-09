import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "./models/pokemon.model";
import {PokemonService} from "./services/pokemon.service";

@Component({
  selector: 'pok-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnDestroy {

  @Input() set pokemonId(id: number) {
    this.getPokemon(id);
  }

  pokemon: Pokemon | undefined;

  private unsubscribe$ = new Subject<void>();

  constructor(private pokemonService: PokemonService) {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private getPokemon(id: number): void {
    console.log(this.pokemonId);
    if (id) {
      this.pokemonService.getById(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(pokemon => {
          console.log(pokemon);
          this.pokemon = pokemon;
        });
    }
  }

}
