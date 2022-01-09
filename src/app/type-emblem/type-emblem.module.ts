import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeEmblemComponent} from "./type-emblem.component";
import {TypeIconService} from "./services/type-icon.service";

@NgModule({
  declarations: [TypeEmblemComponent],
  imports: [
    CommonModule,
  ],
  exports: [TypeEmblemComponent],
  providers: [
    TypeIconService
  ]
})
export class TypeEmblemModule {
}
