import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TypeIconService {

	constructor() {
	}

	getIconByType(pokemonType: string): string {
		switch (pokemonType) {
			case 'normal': {
				return 'bear-head-frontal-outline.svg';
			}
			case 'fighting': {
				return 'swords.svg';
			}
			case 'flying': {
				return 'wing.svg';
			}
			case 'poison': {
				return 'skull.svg';
			}
			case 'ground': {
				return 'dunes.svg';
			}
			case 'rock': {
				return 'cave.svg';
			}
			case 'bug': {
				return 'beetle.svg';
			}
			case 'ghost': {
				return 'ghost.svg';
			}
			case 'steel': {
				return 'gold-bars.svg';
			}
			case 'fire': {
				return '001-fire.svg';
			}
			case 'water': {
				return '002-water.svg';
			}
			case 'grass': {
				return '003-plant.svg';
			}
			case 'electric': {
				return '004-thunderbolt.svg';
			}
			case 'psychic': {
				return '005-eye.svg';
			}
			case 'ice': {
				return '006-ice.svg';
			}
			case 'dragon': {
				return '007-dragon.svg';
			}
			case 'dark': {
				return '008-scythe.svg';
			}
			case 'fairy': {
				return '009-magic.svg';
			}
			case 'unknown': {
				return '010-question.svg';
			}
			case 'shadow': {
				return '011-contrast.svg';
			}
		}
		return '011-contrast.svg';
	}
}
