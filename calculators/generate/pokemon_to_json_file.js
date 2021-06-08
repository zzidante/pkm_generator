function ctor (generateNewPokemon, generateSHA1, path, directoryPrefix, fileShouldBeOverwritten, writeStreamToJson, logger) {
  this.makeFile = ([_name, _level]) => {
    const newPokemon = generateNewPokemon([_name, _level]);
    // This is a lazy check, cuz the JSON _could_ get reordered without our knowledge / not guaranteed especially
    // if I source from alternative areas later. Revisit this with a proper pre-ordering scheme to ensure keys are
    // in a predicable order. For now this is good enough since we rely on our own way of generating the source JSON.
    const uniqContentId = generateSHA1(newPokemon);

    const {
      name,
      level,
      nature: { name: natureName },
    } = newPokemon;

    const fileName = `${name}_${level}_${natureName}_${uniqContentId}.json`;
    const fullyQualifiedPath = path.join(directoryPrefix, 'generated_pokemon', fileName);
    const overwriteFile = fileShouldBeOverwritten(fullyQualifiedPath);

    if (overwriteFile) {
      logger({message: `${fileName} being written...`});
      writeStreamToJson(
        { fullyQualifiedPath, dataObject: newPokemon },
        () => { logger({ message: `${fileName} done.`}); }
      );
    } else {
      logger({ message: `${fileName} should not be overwritten, skipped.`});
    }

    return newPokemon;
  };

  return this.makeFile;
}

module.exports = {
  default: ctor(
    generateNewPokemon = require('./new_pokemon').default,
    generateSHA1 =  require('sha1'),
    path = require('path'),
    directoryPrefix = __dirname,
    fileShouldBeOverwritten = require('../../file_handling/file_should_be_overwritten').interface,
    writeStreamToJson = require('../../file_handling/write_stream_to_json').interface,
    logger = require('../../helpers/logger')
  ),
  pure: ctor,
};
