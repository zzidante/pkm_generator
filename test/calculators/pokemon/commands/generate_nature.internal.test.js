const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let GenerateNature = require('../../../../calculators/pokemon/commands/generate_nature.js').internal;

describe('calculators/pokemon/commands/generate_nature.js', function () {
  describe('internal = {}', function () {
    describe('natureStatChangeByLevel()', function () {
      it('returns appropriate nature stats for a boost', function () {
        const input = {level: 25, advantage: true};
        const expectedResults = 6;
        const results = GenerateNature.natureStatChangeByLevel(input);

        assert.equal(results, expectedResults);
      });     

      it('returns appropriate nature stats for a cut', function () {
        const input = {level: 25, advantage: false};
        const expectedResults = -3;
        const results = GenerateNature.natureStatChangeByLevel(input);

        assert.equal(results, expectedResults);
      }); 
    });
  });
});
