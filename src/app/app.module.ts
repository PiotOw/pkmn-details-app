import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {TypeEmblemModule} from "./type-emblem/type-emblem.module";
import {TypeEmblemComponent} from "./type-emblem/type-emblem.component";
import {PokemonModule} from "./pokemon/pokemon.module";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {HttpClientModule} from "@angular/common/http";

const local = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TypeEmblemModule,
    PokemonModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [
    TypeEmblemComponent,
    PokemonComponent
  ],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {

    const typeEmblem = createCustomElement(TypeEmblemComponent, {injector: this.injector})
    customElements.define('pkmn-type-emblem', typeEmblem);

    const pokemon = createCustomElement(PokemonComponent, {injector: this.injector})
    customElements.define('pkmn-pokemon', pokemon);

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
