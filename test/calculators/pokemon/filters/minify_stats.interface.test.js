let chai = require('chai');
var assert = chai.assert;

let MinifyStats = require('../../../../calculators/pokemon/filters/minify_stats.js');

describe('calculators/pokemon/filters/minify_stats.js', function () {
  describe('MinifyStats()', function () {
    it('returns a useable output', function () {
      const input = {
        name: 'Test',
        level: 10,
        baseHp: 20,
        baseAttack: 30,
        baseDefense: 44,
        baseSpecialAttack: 50,
        baseSpecialDefense: 56,
        baseSpeed: 89,
      };

      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 2,
        baseAttack: 3,
        baseDefense: 4,
        baseSpecialAttack: 5,
        baseSpecialDefense: 6,
        baseSpeed: 9,
      };

      const results = MinifyStats(input);

      assert.deepEqual(results, expectedResults);
    });
  });
});
