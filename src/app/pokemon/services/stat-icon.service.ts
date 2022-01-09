import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StatIconService {

	constructor() {
	}

	getIconByStat(pokemonStat: string): string {
		switch (pokemonStat) {
			case 'hp': {
				return '001-heart.svg'
			}
			case 'attack': {
				return '002-sword.svg'
			}
			case 'defense': {
				return '003-shield.svg'
			}
			case 'special-attack': {
				return '004-nuclear-explosion.svg'
			}
			case 'special-defense': {
				return '005-atom.svg'
			}
			case 'speed': {
				return '006-fast.svg'
			}
			case 'accuracy': {
				return '007-sniper.svg'
			}
			case 'evasion': {
				return '008-capoeira.svg'
			}
		}
		return '';
	}
}
