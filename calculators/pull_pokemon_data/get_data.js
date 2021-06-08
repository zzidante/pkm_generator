// jshint ignore: start
// ensure we have access to `process.env` as set in .env
// (can be removed when we globally init this in the index.js file when
// we put together a server and have that kind of luxury)
require('dotenv').config();

const PokedexPromise = require('pokedex-promise-v2');
const GetPokemonAPIData = new PokedexPromise();
const writeToFile = require('./internals/write_to_file').default;
const reverseString = require('../../helpers/reverse_string');

// calls all of our endpoints and writes the results to a file in `./raw_responses`
const getPokemonData = async function (pokemonName) {
  const currentLocaleDate = new Date();
  const fileName = `${pokemonName}_v${process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION}.json`;
  let pokemonByNameAPIResponse;
  let pokemonBySpeciesReducedAPIResponse;
  let pokemonEvolutionChainAPIResponse;

  try {
    pokemonByNameAPIResponse = await GetPokemonAPIData.getPokemonByName(pokemonName);

    const getPokemonSpeciesByNameResponse = await GetPokemonAPIData.getPokemonSpeciesByName(pokemonName);
    const {
       evolution_chain: {
         url: evolutionChainUrl
        },
        gender_rate: genderRate,
        capture_rate: captureRate,
        base_happiness: baseHappiness
    } = getPokemonSpeciesByNameResponse;

    // reverse the URL to get only the ID from the back of the string, then flip it back and parse to a number
    evolutionChainId = parseInt(
      reverseString(
        reverseString(evolutionChainUrl).split('/')[1]
      )
    );

    // we don't need most of the response data -- there's a lot of duplication with the
    // previous endpoint so only reduce down to what is relevant
    pokemonBySpeciesReducedAPIResponse = {
      evolutionChainId,
      genderRate, // the chance of this Pokémon being female, in eighths; or -1 for genderless.
      captureRate,
      baseHappiness,
    };

    pokemonEvolutionChainAPIResponse = await GetPokemonAPIData.getEvolutionChainById(evolutionChainId)
  } catch (e) {
    throw e;
  }

  const qualifiedPath = writeToFile(
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

  return qualifiedPath;
}

module.exports = {
  default: getPokemonData,
};
