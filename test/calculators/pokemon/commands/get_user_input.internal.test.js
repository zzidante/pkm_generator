let chai = require('chai');
var assert = chai.assert;

let getUserInput = require('../../../../calculators/pokemon/commands/get_user_input.js').internalMethods;

describe('calculators/pokemon/commands/get_user_input.js', function () {
  describe('internalMethods = {}', function () {
    describe('checkArgumentLength()', function () {
      it('does not return an error for 8 arguments', function () {
        const input = [1, 2, 3, 4, 5, 6, 7, 8];
        const expectedResults = 8;
        const results = getUserInput.checkArgumentLength(input);

        assert.equal(results, expectedResults);
      });

      // --> The () => fn is necessary in order to test an Error as it needs to be uncalled
      it('returns an error for anything except 8 arguments', function () {
        const emptyInput = [];
        const overfilledInput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const eightLetterWord = 'racecars';

        assert.throws(
          () => getUserInput.checkArgumentLength(emptyInput), Error, 'Please supply exactly 8 arguments following `node generate_pokemon.js`'
        );

        assert.throws(
          () => getUserInput.checkArgumentLength(overfilledInput), Error, 'Please supply exactly 8 arguments following `node generate_pokemon.js`'
        );

        assert.throws(
          () => getUserInput.checkArgumentLength(eightLetterWord), Error, 'Please supply exactly 8 arguments following `node generate_pokemon.js`'
        );
      });
    });

    describe('checkArgumentTypes()', function () {
      it('does not return an error for last 7 args as numbers', function () {
        const correctInput = ['PKMN', '1', 2, 3, 4, '5', 6, 7];
        
        assert.doesNotThrow(
          () => getUserInput.checkArgumentLength(correctInput), Error, 'Please use numbers for the last 7 arguments'
        );
      });
      it('returns an error if last 7 args are not given as numbers', function () {
        const incorrectInput = ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'];
        
        assert.throws(
          () => getUserInput.checkArgumentTypes(incorrectInput), Error, 'Please use numbers for the last 7 arguments'
        );
      });
    });
  });
});
