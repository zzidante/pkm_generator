const path = require('path');
const sha1 = require('sha1');

const GenerateNewPokemon = require('./generate_new_pokemon');
const logger = require('../../helpers/logger');
const fileShouldBeOverwritten = require('../../file_handling/file_should_be_overwritten').interface;
const writeStreamToJson = require('../../file_handling/write_stream_to_json').interface;

const deps = {
  generateNewPokemon: GenerateNewPokemon,
  generateSHA1: sha1,
  logger: logger,
  fileShouldBeOverwritten: fileShouldBeOverwritten,
  writeStreamToJson: writeStreamToJson,
};

// used like so from CLI @ current: <file name level> of pokemon you want to generate
// example: `node calculators/components/generate_pokemon_to_json_file.js seel 40`
function makeFile(pokemon = process.argv.slice(2)) {
  const newPokemon = deps.generateNewPokemon.interface(pokemon);
  // this might be a lazy check, cuz the JSON _could_ get reordered without our knowledge / not guaranteed
  // especially if I source of from alternative areas later. Revisit this probably with a proper ordering scheme.
  // for now it should be fine since we only rely on our own way of generating the source JSON.
  const uniqContentId = deps.generateSHA1(newPokemon);

  const {
    name,
    level,
    nature: { name: natureName },
  } = newPokemon;

  const fileName = `${name}_${level}_${natureName}_${uniqContentId}.json`;
  const fullyQualifiedPath = path.join(__dirname, 'generated_pokemon', fileName);
  const overwriteFile = fileShouldBeOverwritten(fullyQualifiedPath);

  if (overwriteFile) {
    deps.logger({message: `${fileName} being written...`});
    writeStreamToJson({fullyQualifiedPath, dataObject: newPokemon});
    deps.logger({ message: `${fileName} done.`});
  } else {
    deps.logger({ message: `${fileName} should not be overwritten, skipped.`});
  }

  return newPokemon;
}

makeFile();

module.exports = {
  interface: makeFile,
  deps: deps,
};
