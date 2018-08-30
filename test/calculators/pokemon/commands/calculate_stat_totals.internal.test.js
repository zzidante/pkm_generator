let chai = require('chai');
var assert = chai.assert;

let CalculateStatTotals = require('../../../../calculators/pokemon/commands/calculate_stat_totals.js').internal;

describe('calculators/pokemon/commands/calculate_stat_totals.js', function () {
  describe('calculateStatTotals()', function () {
    describe('natureFilter()', function () {
      it('advantage returns 10', function () {
        const nature = {
          name: 'hasty',
          adv: 'speed',
          disAdv: 'defence',
        };
        
        const expectedResults = 10;

        const results = CalculateStatTotals.natureFilter('speed', nature, 10, -5);

        assert.equal(results, expectedResults);
      });

      it('disadvantage returns -5', function () {
        const nature = {
          name: 'hasty',
          adv: 'speed',
          disAdv: 'defence',
        };

        const expectedResults = -5;
        
        const results = CalculateStatTotals.natureFilter('defence', nature, 10, -5);

        assert.deepEqual(results, expectedResults);
      });

      it('unapplicable nature returns 0', function () {
        const nature = {
          name: 'hasty',
          adv: 'speed',
          disAdv: 'defence',
        };

        const expectedResults = 0;
        
        const results = CalculateStatTotals.natureFilter('hitPoints', nature, 10, -5);

        assert.deepEqual(results, expectedResults);
      });
    });
  });
});
