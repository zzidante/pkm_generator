const convertToTabletop = require('./convert_raw_data').default;
const [_, pokemonName] = process.argv.slice(1);

if (pokemonName) {
  convertToTabletop(pokemonName);
} else {
  console.log('You must supply a valid pokemon name.');
}
