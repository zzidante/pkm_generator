const chai = require('chai');
const assert = chai.assert;

let FetchNature = require('../../../../calculators/pokemon/commands/fetch_nature.js').interface;

describe('calculators/pokemon/commands/fetch_nature.js', function () {
  describe('fetchNature()', function () {
    it('returns object with nature data', function () {
      const input = {pokemonObj: {level: 20}, rolledNature: 10};
      const expectedResults = {
        level: 20,
        nature: {
          name: 'hasty',
          adv: 'spd',
          disAdv: 'defe',
        },
        natureBoost: 6,
        natureCut: -3
      };

      const results = FetchNature(input);

      assert.deepEqual(results, expectedResults);
    });

    it('returns object with only nature data', function () {
      const input = {pokemonObj: {level: 20}, rolledNature: 10, dataOnly: true};
      const expectedResults = {
        name: 'hasty',
        adv: 'spd',
        disAdv: 'defe',
      };

      const results = FetchNature(input);

      assert.deepEqual(results, expectedResults);
    }); 
  });
});
