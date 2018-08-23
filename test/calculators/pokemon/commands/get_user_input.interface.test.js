let chai = require('chai');
var assert = chai.assert;

let getUserInput = require('../../../../calculators/pokemon/commands/get_user_input.js');

describe('calculators/pokemon/commands/get_user_input.js', function () {
  describe('GetUserInput()', function () {
    it('returns a useable output', function () {
      const input = [
        'Test', 
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
      ];

      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHitPoints: 11,
        baseAttack: 12,
        baseDefence: 13,
        baseSpecialAttack: 14,
        baseSpecialDefence: 15,
        baseSpeed: 16,
      };

      const results = getUserInput.interface(input);

      assert.deepEqual(results, expectedResults);
    });
  });
});
