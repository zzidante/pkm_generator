const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let DeriveAffinity = require('../../../../calculators/pokemon/commands/derive_affinity.js');

describe('calculators/pokemon/commands/derive_affinity.js', function () {
  describe('derive_affinity()', function () {
    it('it calls its wrapped fns', function () {
      const input = {
        level: 50,
        baseHitPoints: 20,
        baseAttack: 20,
        baseDefence: 20,
        baseSpecialAttack: 20,
        baseSpecialDefence: 20,
        baseSpeed: 20,
      };
      // stub
      sinon.stub(DeriveAffinity.internal, 'affinityCalculation').returns(10);
      // call
      const result = DeriveAffinity.interface(input);
      const expectedResult = {
        level: 50,
        baseHitPoints: 20,
        baseAttack: 20,
        baseDefence: 20,
        baseSpecialAttack: 20,
        baseSpecialDefence: 20,
        baseSpeed: 20,
        affinityHitPoints: 10,
        affinityAttack: 10,
        affinityDefence: 10,
        affinitySpecialAttack: 10,
        affinitySpecialDefence: 10,
        affinitySpeed: 10,
      };

      assert.deepEqual(result, expectedResult);

      sinon.restore();
    });
  });
});
