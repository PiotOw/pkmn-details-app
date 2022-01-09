import {Component, Input, OnInit} from '@angular/core';
import {PokemonType} from "./models/pokemon-type.model";
import {TypeIconService} from "./services/type-icon.service";

@Component({
	selector: 'pok-type-emblem',
	templateUrl: './type-emblem.component.html',
	styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {


	@Input() types: PokemonType[] = [];
	@Input() active: boolean | undefined;

	constructor(public typeIconService: TypeIconService) {
	}

	ngOnInit() {
	}

}
