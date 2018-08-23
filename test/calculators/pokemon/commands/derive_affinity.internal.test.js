let chai = require('chai');
var assert = chai.assert;

let deriveAffinity = require('../../../../calculators/pokemon/commands/derive_affinity.js').internal;

describe('calculators/pokemon/commands/derive_affinity.js', function () {
  describe('affinityCalculation()', function () {
    it('lowest affinity returns 16', function () {
      const input = { baseStat: 3, level: 100 };

      const expectedResults = 16;

      const results = deriveAffinity.affinityCalculation(input);

      assert.equal(results, expectedResults);
    });
    it('second lowest affinity returns 19', function () {
      const input = { baseStat: 7, level: 99 };

      const expectedResults = 19;

      const results = deriveAffinity.affinityCalculation(input);

      assert.equal(results, expectedResults);
    });

    it('third lowest affinity returns 24', function () {
      const input = { baseStat: 12, level: 99 };

      const expectedResults = 24;

      const results = deriveAffinity.affinityCalculation(input);

      assert.equal(results, expectedResults);
    });

    it('fourth lowest affinity returns 33', function () {
      const input = { baseStat: 18, level: 99 };

      const expectedResults = 33;

      const results = deriveAffinity.affinityCalculation(input);

      assert.equal(results, expectedResults);
    });

    it('highest affinity returns 49', function () {
      const input = { baseStat: 19, level: 99 };

      const expectedResults = 49;

      const results = deriveAffinity.affinityCalculation(input);

      assert.equal(results, expectedResults);
    });
  });
});
