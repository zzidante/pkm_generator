// ensure we have access to `process.env` as set in .env
// (can be removed when we globally init this in the index.js file when
// we put together a server and have that kind of luxury)
require('dotenv').config();

const PokedexPromise = require('pokedex-promise-v2');
const GetPokemonAPIData = new PokedexPromise();
const writeToFile = require('./internals/write_to_file').default;
const reverseString = require('../../helpers/reverse_string');

// calls all of our endpoints and writes the results to a file in `./raw_responses`
const getPokemonData = async function (pokemonName, endIt = false) {
  const currentLocaleDate = new Date();
  const fileName = `${pokemonName}_v${process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION}.json`;
  let pokemonByNameAPIResponse;
  let pokemonBySpeciesReducedAPIResponse;
  let pokemonEvolutionChainId;
  let pokemonEvolutionChainAPIResponse;

  await GetPokemonAPIData.getPokemonByName(pokemonName)
  .then((response) => {
    if (!response.name) {
      throw 'No `name` parameter on response object - pokemon is invalid';
    }

    pokemonByNameAPIResponse = response;
  })
  .catch((error) => {
    throw error;
  });

  await GetPokemonAPIData.getPokemonSpeciesByName(pokemonName)
  .then((response) => {
    // reverse the URL to get only the ID from the back of the string, then flip it back and parse to a number
    pokemonEvolutionChainId = parseInt(
      reverseString(
        reverseString(response.evolution_chain.url).split('/')[1]
      )
    );

    // we don't need most of this data -- there's a lot of duplication with the previous endpoint
    pokemonBySpeciesReducedAPIResponse = {
      evolutionChainId: pokemonEvolutionChainId,
      genderRate: response.gender_rate, // The chance of this Pokémon being female, in eighths; or -1 for genderless.
      captureRate: response.capture_rate,
      baseHappiness: response.base_happiness,
    };
  })
  .catch((error) => {
    throw error;
  });

  await GetPokemonAPIData.getEvolutionChainById(pokemonEvolutionChainId)
  .then((response) => {
    pokemonEvolutionChainAPIResponse = response;
  })
  .catch((error) => {
    throw error;
  })
  .finally(() => {
    // this promise is keeping the process alive 'indefinitely' -- probably cuz Promises aren't part of Node's
    // 'are there any callbacks left to call? No? Okay close it' logic so Promises don't prevent process from ending but
    // I am sure this package has a SetInterval or SetTimeout to prevent that forced closing from happening - but is this
    // what we really want here? HMMM. Gotta look into this further later when I've actually piped in everything.
    // NOTE: We'd need to know writing to <all the> file<s> is done before we'd be able to safely smash this closed.
    //
    if (endIt) {
      process.exit();
    }
  });

  writeToFile(
    {
      fileName: fileName,
      version: process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION,
      // this is a loose timeframe, when I want to be serious about I will do the UTC storing via postgres later.
      datePulled: `${currentLocaleDate.getUTCFullYear()}-${currentLocaleDate.getUTCMonth()}-${currentLocaleDate.getUTCDate()}`,
      pokemonByNameAPIResponse: pokemonByNameAPIResponse,
      pokemonBySpeciesAPIResponse: pokemonBySpeciesReducedAPIResponse,
      pokemonEvolutionChainAPIResponse: pokemonEvolutionChainAPIResponse
    }
  );
}

module.exports = {
  interface: getPokemonData,
};
