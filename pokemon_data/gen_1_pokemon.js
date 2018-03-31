const transformData = require('../transform_pokemon_data.js');

// Gen I

const rattata = require('./19_rattata');
// const raticate = require('./20_raticate');
const sandshrew = require('./27_sandshrew.js');
const sandslash = require('./28_sandslash.js');
const nidoran_f = require('./29_nidoran_f.js');

const nidorina = require('./30_nidorina.js');
const nidoqueen = require('./31_nidoqueen.js');
const nidoran_m = require('./32_nidoran_m.js');
const nidorino = require('./33_nidorino.js');
const nidoking = require('./34_nidoking.js');
const clefairy = require('./35_clefairy.js');
const clefable = require('./36_clefable.js');
const vulpix = require('./37_vulpix.js');
const ninetails = require('./38_ninetails.js');
// const jigglypuff = require('./39_jigglypuff.js');
// const wigglytuff = require('./40_wigglytuff.js');
const zubat = require('./41_zubat.js');
const golbat = require('./42_golbat.js');

const growlithe = require('./58_growlithe.js');
const arcanine = require('./59_arcanine.js');

const shellder = require('./90_shellder.js');
const cloyster = require('./91_cloyster.js');
const krabby = require('./98_krabby.js');
const kingler = require('./99_kingler.js');

const magikarp = require('./129_magikarp.js');

const gyarados = require('./130_gyarados.js');

// Gen II

const mareep = require('./179_mareep.js');

const flaaffy = require('./180_flaaffy.js');
const ampharos = require('./181_ampharos.js');

const crobat = require('./169_crobat.js');

const cleffa = require('./173_cleffa.js');

// Gen: Alolan
// const alolan_rattata = require('./alolan_rattata');
// const alolan_raticate = require('./alolan_raticate');

// const alolan_vulpix = require('./alolan_vulpix.js');
// const alolan_ninetails = require('./alolan_ninetails.js');

module.exports = {
  rattata,
  // raticate,
  sandshrew,
  sandslash,
  nidoran_f,
  nidorina,
  nidoqueen,
  nidoran_m,
  nidorino,
  nidoking,
  clefairy,
  clefable,
  // vulpix,
  // ninetails,
  // jigglypuff,
  // wigglytuff,
  zubat,
  golbat,
  growlithe,
  arcanine,
  shellder,
  cloyster,
  krabby,    
  kingler,
  magikarp,
  gyarados,
  // Gen II
  mareep,   
  flaaffy,
  ampharos,
  crobat,
  cleffa,
  // Gen: Alolan
  // alolan_rattata,
  // alolan_raticate,
  // alolan_vulpix,
  // alolan_ninetails,
};

console.log('stat? ', transformData.getStats(nidoran_m, 'HP')); // (pokemon, stat) => {}
console.log(transformData.getPrettyStats(cloyster)); // pokemon => ''
console.log(transformData.buildGeneratorQuery(cloyster, 1)); // pokemon, level => ''
console.log(transformData.getValidMoveByLevel(cloyster, 1)); // pokemon, level => []
console.log(transformData.evolvesWhen(sandshrew)); // pokemon => []
console.log(transformData.evValue(clefairy)); // pokemon, *format => * ? '' : []

// console.log(transformData.buildRPGPokemon());  
// Take results of buildGeneratorQuery and pass it to the makeStatRandom file (or whatever its called)
// , getting back the new pokemonObject.
// add moveData from getValidMoveByLevel and add it into pokemoObject.
// write a series of functions that makes that pokemon data pretty. 