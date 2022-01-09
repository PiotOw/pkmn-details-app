import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonComponent} from './pokemon.component';
import {TypeEmblemModule} from "../type-emblem/type-emblem.module";
import {StatCardComponent} from "./components/stat-card/stat-card.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {StatsComponent} from "./components/stats/stats.component";
import {PokemonService} from "./services/pokemon.service";
import {StatIconService} from "./services/stat-icon.service";
import {PikaRulerComponent} from "./components/pika-ruler/pika-ruler.component";
import {PikachuService} from "./services/pikachu.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    OverviewComponent,
    PikaRulerComponent,
    StatCardComponent,
    StatsComponent,
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    TypeEmblemModule,
    HttpClientModule,
  ],
  exports: [PokemonComponent],
  providers: [
    PokemonService,
    StatIconService,
    PikachuService
  ]
})
export class PokemonModule {
}
