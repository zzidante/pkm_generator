const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let getUserInput = require('../../../../calculators/pokemon/commands/get_user_input.js').internal;

describe('calculators/pokemon/commands/get_user_input.js', function () {
  describe('internal = {}', function () {
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

    describe('filterArguments()', function () {
      it('it calls its wrapped fns', function () {
        // spy
        sinon.spy(getUserInput, 'filterArguments');

        // stubs
        const checkArgumentLength = sinon.stub(getUserInput, 'checkArgumentLength');
        const checkArgumentTypes = sinon.stub(getUserInput, 'checkArgumentTypes');
        
        // call the method
        getUserInput.filterArguments('test');

        // assertions
        sinon.assert.calledWith(checkArgumentLength, 'test');
        sinon.assert.calledWith(checkArgumentTypes, 'test');
        sinon.restore();
      });
    });

    describe('formatToNum()', function () {
      it('it turns an array of string numbers into real numbers', function () {        
        const call = ['1', '2'];
        const result = [1, 2];

        const formattedNumber = getUserInput.formatToNum(call);
        assert.deepEqual(formattedNumber, result);
      });
    });
  });
});
