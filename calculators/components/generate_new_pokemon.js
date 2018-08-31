const GeneratePokemon = require('../pokemon/generate_pokemon');
const PokemonData = require('../../pokemon_data/00_pokemon_list');

function generateNewPokemon(pokemon = process.argv.slice(2)) {
  const iChooseYou = PokemonData[pokemon[0]];
  const level = pokemon[1];
  const statsInput = [
    pokemon[0], 
    level,
    iChooseYou.stats.hp,
    iChooseYou.stats.atk,
    iChooseYou.stats.def,
    iChooseYou.stats.spAtk,
    iChooseYou.stats.spDef,
    iChooseYou.stats.spd,
  ];
  const generateRandomizedPokemon = GeneratePokemon.interface(statsInput);
  console.log(generateRandomizedPokemon);
}

generateNewPokemon();

module.exports = {
  interface: generateNewPokemon,
};
