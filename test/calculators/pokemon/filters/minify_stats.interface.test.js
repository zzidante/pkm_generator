let chai = require('chai');
var assert = chai.assert;

let MinifyStats = require('../../../../calculators/filters/minify_stats.js');

describe('calculators/filters/minify_stats.js', function () {
  describe('MinifyStats()', function () {
    it('returns a useable output', function () {
      const input = {
        name: 'Test',
        level: 10,
        baseHitPoints: 20,
        baseAttack: 30,
        baseDefence: 44,
        baseSpecialAttack: 50,
        baseSpecialDefence: 56,
        baseSpeed: 89,
      };

      // always rounds up? Check this rule
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHitPoints: 2,
        baseAttack: 3,
        baseDefence: 5,
        baseSpecialAttack: 5,
        baseSpecialDefence: 6,
        baseSpeed: 9,
      };

      const results = MinifyStats(input);

      assert.deepEqual(results, expectedResults);
    });
  });
});
