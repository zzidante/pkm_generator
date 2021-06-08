function ctor (path, directoryPrefix, fileShouldBeOverwritten, writeStreamToJson, logger) {
  this.makeFile = ({fileName, version, datePulled, ...response}) => {
    const fileContents = {fileName, version, datePulled, response};

    const fullyQualifiedPath = path.join(directoryPrefix, '../raw_responses', fileName);
    const overwriteFile = fileShouldBeOverwritten(fullyQualifiedPath);

    if (overwriteFile) {
      logger({message: `${fileName} being written...`});
      writeStreamToJson(
        { fullyQualifiedPath, dataObject: fileContents },
        () => { logger({ message: `${fileName} done.`}); }
      );
    } else {
      logger({ message: `${fileName} should not be overwritten, skipped.`});
    }
  };

  return this.makeFile;
}

module.exports = {
  default: ctor(
    path = require('path'),
    directoryPrefix = __dirname,
    fileShouldBeOverwritten = require('../../../file_handling/file_should_be_overwritten').interface,
    writeStreamToJson = require('../../../file_handling/write_stream_to_json').interface,
    logger = require('../../../helpers/logger')
  ),
  pure: ctor,
};
