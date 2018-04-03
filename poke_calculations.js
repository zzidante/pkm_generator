const method = require('./transform_pokemon_data.js');
const pokemon = require('./pokemon_data/gen_1_pokemon.js');


console.log(method.buildGeneratorQuery(pokemon.gyarados, 10));

// console.log('stat? ', transformData.getStats(nidoran_m, 'HP')); // (pokemon, stat) => {}
// console.log(transformData.getPrettyStats(cloyster)); // pokemon => ''
// console.log(transformData.buildGeneratorQuery(cloyster, 1)); // pokemon, level => ''
// console.log(transformData.getValidMoveByLevel(cloyster, 1)); // pokemon, level => []
// console.log(transformData.evolvesWhen(sandshrew)); // pokemon => []
// console.log(transformData.evValue(clefairy)); // pokemon, *format => * ? '' : []

// console.log(transformData.buildRPGPokemon());  
// Take results of buildGeneratorQuery and pass it to the makeStatRandom file (or whatever its called)
// , getting back the new pokemonObject.
// add moveData from getValidMoveByLevel and add it into pokemoObject.
// write a series of functions that makes that pokemon data pretty. 