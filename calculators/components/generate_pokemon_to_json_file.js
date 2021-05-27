const fs = require('fs');
const path = require('path');
const sha1 = require('sha1');

const GenerateNewPokemon = require('./generate_new_pokemon');
const logger = require('../../helpers/logger');

const deps = {
  generateNewPokemon: GenerateNewPokemon,
  generateSHA1: sha1,
  logger: logger,
};

const internalMethods = {
  fileShouldBeOverwritten: function (fullyQualifiedPath) {
    let minValidJsonSize = 5;
    let fileNotExists;
    let fileHasNoContent;

    try {
      // quick n' dirty way to see if a file exists & has content
      let fileSize = fs.statSync(fullyQualifiedPath).size;
      fileNotExists = false;
      fileHasNoContent = (fileSize < minValidJsonSize) ? true : false;
    } catch (error) {
      // a loose check to ensure the error we expect is one that says the
      // file doesn't exist and not some other error -- if it is a different
      // error it should be rethrown and handled appropriately.
      const truncatedErrorMessage = `${error.message.slice(0, 20)}... [truncated]`;
      if (truncatedErrorMessage.includes('no such file')) {
        fileNotExists = true;
      } else {
        throw(error);
      }
    }

    return fileNotExists || fileHasNoContent;
  },
};

// used like so from CLI @ current: <file name level> of pokemon you want to generate
// example: `node calculators/components/generate_pokemon_to_json_file.js seel 40`
function makeFile(pokemon = process.argv.slice(2)) {
  const newPokemon = deps.generateNewPokemon.interface(pokemon);
  const uniqContentId = deps.generateSHA1(newPokemon);

  const {
    name,
    level,
    nature: { name: natureName },
  } = newPokemon;

  const fileName = `${name}_${level}_${natureName}_${uniqContentId}.json`;
  const fullyQualifiedPath = path.join(__dirname, 'generated_pokemon', fileName);
  const overwriteFile = internalMethods.fileShouldBeOverwritten(fullyQualifiedPath);

  if (overwriteFile) {
    deps.logger({message: `${fileName} being written...`});
    const writeStream = fs.createWriteStream(fullyQualifiedPath);
    writeStream.write(JSON.stringify(newPokemon, null, 2));
    writeStream.end();
    deps.logger({ message: `${fileName} done.`});
  } else {
    deps.logger({ message: `${fileName} should not be overwritten, skipped.`});
  }

  return newPokemon;
}

makeFile();

module.exports = {
  interface: makeFile,
  internal: internalMethods,
  deps: deps,
};
