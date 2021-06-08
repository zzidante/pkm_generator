const fs = require('fs');

function writeStreamToJson({fullyQualifiedPath, dataObject}, finishCallback) {
  const writeStream = fs.createWriteStream(fullyQualifiedPath);
  writeStream.write(JSON.stringify(dataObject, null, 2));
  writeStream.end();
  writeStream.on('finish', function () {
    finishCallback();
  });
}

module.exports = {
  interface: writeStreamToJson,
};
