function ctor(generatePokemon, pokemonData, getRandomMoves) {
  this.newPokemon = (pokemon) => {
    // parse input
    const [ name, level ] = pokemon;

    // get base data for given pokemon
    const {
      stats: {
        hp,
        atk,
        def,
        spAtk,
        spDef,
        spd,
      },
      moves
    } = pokemonData[name];

    // generate custom pokemon
    return getRandomMoves(
      generatePokemon([
        name,
        level,
        hp,
        atk,
        def,
        spAtk,
        spDef,
        spd,
      ]),
      moves
    );
  };

  return this.newPokemon;
}

module.exports = {
  default: ctor(
    generatePokemon = require('../pokemon/generate_pokemon').interface,
    pokemonData = require('../../pokemon_data/00_pokemon_list'),
    getRandomMoves = require('../moves/get_random_moves').interface
  ),
  pure: ctor
};
