const fs = require('fs');

function writeStreamToJson({fullyQualifiedPath, dataObject}) {
  const writeStream = fs.createWriteStream(fullyQualifiedPath);
  writeStream.write(JSON.stringify(dataObject, null, 2));
  writeStream.end();
}

module.exports = {
  interface: writeStreamToJson,
};
