// ensure we have access to `process.env` as set in .env
// (can be removed when we globally init this in the index.js file when
// we put together a server and have that kind of luxury)
require('dotenv').config();

const PokedexPromise = require('pokedex-promise-v2');
const GetPokemonAPIData = new PokedexPromise();
const writeToFile = require('./internals/write_to_file').interface;
const deps = {
  writeToFile: writeToFile,
  getNameFromResponse: function (response) {
    const name = response.name;

    if (name) {
      return name;
    } else {
      throw 'No `name` parameter on response object';
    }
  },
};

const getPokemonData = function (whoseThatPokemon, endIt = null) {
  const fullGenerationLastPokemonCollection = [
    151,
    251,
    386,
    493,
    649,
    721,
    809,
    898,
  ];

  const [
    generationOneLastPokemon,
    generationTwoLastPokemon,
    generationThreeLastPokemon,
    generationFourLastPokemon,
    generationFiveLastPokemon,
    generationSixLastPokemon,
    generationSevenLastPokemon,
    generationEightLastPokemon,
  ] = fullGenerationLastPokemonCollection;

  GetPokemonAPIData.getPokemonByName(whoseThatPokemon) // with Promise
  .then(function (response) {
    // this is a loose timeframe, when I want to be serious about I will do the UTC storing via postgres later.
    const currentLocaleDate = new Date();
    const fileName = `${whoseThatPokemon}_${deps.getNameFromResponse(response)}_v${process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION}.json`;

    deps.writeToFile(
      {
        fileName: fileName,
        version: process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION,
        datePulled: `${currentLocaleDate.getUTCFullYear()}-${currentLocaleDate.getUTCMonth()}-${currentLocaleDate.getUTCDate()}`,
        response: response,
      }
    );
  })
  .then(function (_r) {
    console.log('end get_data');
  })
  .catch(function (error) {
    console.log('There was an ERROR: ', error);
  })
  .finally(function () {
    // this promise is keeping the process alive 'indefinitely' -- probably cuz Promises aren't part of Node's
    // 'are there any callbacks left to call? No? Okay close it' logic so Promises don't prevent process from ending but
    // I am sure this package has a SetInterval or SetTimeout to prevent that forced closing from happening - but is this
    // what we really want here? HMMM. Gotta look into this further later when I've actually piped in everything.
    // NOTE: We'd need to know writing to <all the> file<s> is done before we'd be able to safely smash this closed.
    //
    // if (endIt) {
    //   process.exit();
    // }
  });
};

// remove when we import this rather than calling it direct
getPokemonData(process.argv.slice(1)[1], true);


// nothing is importing this yet.
// module.exports = {
//   interface: getPokemonData,
// };
