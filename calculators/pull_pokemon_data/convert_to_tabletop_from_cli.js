const convertToTabletop = require('./convert_raw_data').default;
const [_, pokemonName] = process.argv.slice(1);

if (pokemonName) {
  try {
    convertToTabletop(pokemonName);
  } catch (e) {
    console.log('That pokemon is not currently supported');
  }
} else {
  console.log('You must supply a valid pokemon name.');
}
