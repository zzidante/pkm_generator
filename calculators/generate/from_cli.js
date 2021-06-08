const generate = require('./pokemon_to_json_file').default;
const [pokemonName, requestedLevel] = process.argv.slice(2);
if (pokemonName && requestedLevel) {
  try {
    generate([pokemonName, requestedLevel]);
  } catch(e) {
    console.log(`The pokemon ${pokemonName} is currently not supported in the static data set. Have you tried Bulbasaur?`);
  }
} else {
  console.log('You must supply a valid pokemon name and level when running this command.');
}
