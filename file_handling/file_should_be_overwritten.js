const fs = require('fs');

function fileShouldBeOverwritten (fullyQualifiedPath) {
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
};

module.exports = {
  interface: fileShouldBeOverwritten,
};
