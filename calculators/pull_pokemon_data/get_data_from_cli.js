const getData = require('./get_data').default;
const [_, pokemonName] = process.argv.slice(1);
const readLastLines = require('read-last-lines');

if (pokemonName) {
  getData(pokemonName).then((qualifiedPath) => {
    const checkForFinishedFile = function (path, run = true) {
      readLastLines.read(path, 1)
      // hack for now until we are running everything on a server, by checking that
      // the last line is a single non-prepadded ending bracket (and knowing our
      // JSON is prettified) -- we can assume that once it exists the file is written.
      .then((lines) => {
        if (lines === '}') {
          console.log('Write appears to have finished, ending the process');
          process.exit();
        } else {
          // try it one last time
          if (run) {
            console.log("write didn't finish, check it again in 5 seconds");
            setTimeout(function() {
              checkForFinishedFile(path, false);
            }, 5000);
          } else {
            console.log('write took longer than expected or is not ending as expected, its up to operator to manually abort with ctrl-C.');
          }
        }
      });
    };

    checkForFinishedFile(qualifiedPath);
  }).catch((e) => {
    // it's normal sometimes for some pokemon pages to become unavailable
    // usually its a 503
    console.log('Unexpected error', e.message);
  });
} else {
  console.log('You must supply a valid pokemon name.');
}
