const GeneratePokemon = require('../pokemon/generate_pokemon');
const PokemonData = require('../../pokemon_data/00_pokemon_list');
const GetRandomMoves = require('../moves/get_random_moves');

function generateNewPokemon(pokemon) {
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
  } = PokemonData[name];

  // generate custom pokemon
  return GetRandomMoves.interface(
    GeneratePokemon.interface([
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
}

module.exports = {
  interface: generateNewPokemon,
};
