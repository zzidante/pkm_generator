const transformData = require('../transform_pokemon_data.js');

const shellder = require('./90_shellder.js');
// const cloyster = require('./91_cloyster.js');
const krabby = require('./98_krabby.js');
const kingler = require('./99_kingler.js');
// const magikarp = require('./129_magikarp.js');
const gyarados = require('./130_gyarados.js');
const mareep = require('./179_mareep.js');
// const flaaffy = require('./180_flaaffy.js');
// const ampharos = require('./181_ampharos.js');


pokemon = {
    shellder,
    // cloyster,
    krabby,    
    kingler,
    // magikarp,
    gyarados,
    mareep,   
    // flaaffy,
    // ampharos, 
};

console.log(transformData.buildGeneratorQuery('kingler', 40));
console.log(transformData.getValidMoveName('krabby', 1));