const generate = require('./generate_pokemon_to_json_file').default;
const [pokemonName, requestedLevel] = process.argv.slice(2);

if (pokemonName && requestedLevel) {
  console.log(generate([pokemonName, requestedLevel]));
} else {
  console.log('You must supply a valid pokemon name and level when running this command.');
}
