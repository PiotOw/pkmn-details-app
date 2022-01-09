import {Component, Input, OnInit} from '@angular/core';
import {Stat} from "../../models/pokemon.model";

@Component({
	selector: 'pok-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

	@Input() stats: Stat[] = [];

	constructor() {
	}

	ngOnInit() {
	}

}
