const fs = require('fs');

function writeStreamToJson({fullyQualifiedPath, dataObject}, log) {
  const writeStream = fs.createWriteStream(fullyQualifiedPath);
  writeStream.write(JSON.stringify(dataObject, null, 2));
  writeStream.end();
  writeStream.on('finish', function () {
    log();
  });
}

module.exports = {
  interface: writeStreamToJson,
};
