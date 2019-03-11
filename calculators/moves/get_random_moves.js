const RandomizeNumber = require('../../helpers/randomize_number');

const internalMethods = {
  chooseMoves: function(moveSet, level) {
    let moves = [];
    let NUMBER_OF_MOVES = level;

    if (level >= 4) { NUMBER_OF_MOVES = 4;}

    const validMoves = this.filterValidMoves(moveSet, level);
    
    for (let i = 0; i < NUMBER_OF_MOVES; i++) {
      if (validMoves < i) { break; }

      const randomNumber = RandomizeNumber(validMoves.length) - 1;
      moves.push(validMoves[randomNumber]);
      validMoves.splice(randomNumber, 1);
    }

    return moves;
  },

  filterValidMoves: (moveList, level) => {
    let names = [];
    let collection = [];

    const movesCollectionByLevel = moveList.filter((row) => {
      return row.level <= level;
    });

    movesCollectionByLevel.forEach((rrow)=> {
      if (!names.includes(rrow.name)) {
        names.push(rrow.name);
        collection.push(rrow);
      }
    });

    return collection;
  }
};

const getRandomMoves = function(pkmnObj, moveSet) {
  return Object.assign(
    pkmnObj,
    {
      test: internalMethods.chooseMoves(moveSet, pkmnObj.level)
    }
  );
};

module.exports = {
  interface: getRandomMoves,
  internal: internalMethods,
};
