const path = require('path');
const fileShouldBeOverwritten = require('../../../file_handling/file_should_be_overwritten').interface;
const writeStreamToJson = require('../../../file_handling/write_stream_to_json').interface;
const logger = require('../../../helpers/logger');

const deps = {
  logger: logger,
};

const writeToFile = function ({fileName, version, datePulled, response}) {
  const fileContents = {fileName, version, datePulled, response};

  const fullyQualifiedPath = path.join(__dirname, '../raw_responses', fileName);
  const overwriteFile = fileShouldBeOverwritten(fullyQualifiedPath);

  if (overwriteFile) {
    deps.logger({message: `${fileName} being written...`});
    writeStreamToJson({fullyQualifiedPath, dataObject: fileContents});
    deps.logger({ message: `${fileName} done.`});
  } else {
    deps.logger({ message: `${fileName} should not be overwritten, skipped.`});
  }
};

module.exports = {
  interface: writeToFile,
};
