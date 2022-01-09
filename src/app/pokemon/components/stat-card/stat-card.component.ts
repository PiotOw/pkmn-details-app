import {Component, Input, OnInit} from '@angular/core';
import {Stat} from "../../models/pokemon.model";
import {StatIconService} from "../../services/stat-icon.service";

@Component({
	selector: 'pok-stat-card',
	templateUrl: './stat-card.component.html',
	styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent implements OnInit {


	@Input() stat: Stat | undefined;
	constructor(public statIconService: StatIconService) {
	}

	ngOnInit() {
	}

}
