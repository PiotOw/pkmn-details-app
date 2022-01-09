export class PokemonType {

  constructor() {
    this.type = {
      name: ''
    };
  }

  type: {
    name: string;
  };

  static fromType(type: Type): PokemonType {
    const pokemonType = new PokemonType();
    pokemonType.type.name = type.name;
    return pokemonType;
  }
}

export interface Type {
  name: string;
}
