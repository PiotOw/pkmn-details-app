import {PokemonType} from "../../type-emblem/models/pokemon-type.model";

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  weight: number;
  name: string;
  stats: Stat[];
  types: PokemonType[];
}

export interface Ability {
  effect_entries: Effect[];
  id: number;
  name: string;
}

export interface Effect {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface Language {
  id: number;
  name: string;
}

export interface Stat {
  base_stat: number;
  stat: StatType;
}

export interface StatType {
  name: string;
}
