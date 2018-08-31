const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let CalculateStatTotals = require('../../../../calculators/pokemon/commands/calculate_stat_totals.js');

describe('calculators/pokemon/commands/calculate_stat_totals.js', function () {
  describe('calculateStatTotals()', function () {
    it('it calls its wrapped fns', function () {
      const input = {
        level: 50,
        baseHitPoints: 20,
        baseAttack: 20,
        baseDefence: 20,
        baseSpecialAttack: 20,
        baseSpecialDefence: 20,
        baseSpeed: 20,

        eVHitPoints: 1,
        eVAttack: 2,
        eVDefence: 3,
        eVSpecialAttack: 4,
        eVSpecialDefence: 5,
        eVSpeed: 6,

        nature: {
          name: 'hasty',
          adv: 'speed',
          disAdv: 'defence',
        },
        natureBoost: 6,
        natureCut: -3,

        affinityHitPoints: 10,
        affinityHitPointsRatio: '1/6',
        affinityAttack: 10,
        affinityAttackRatio: '1/6',
        affinityDefence: 10,
        affinityDefenceRatio: '1/6',
        affinitySpecialAttack: 10,
        affinitySpecialAttackRatio: '1/6',
        affinitySpecialDefence: 10,
        affinitySpecialDefenceRatio: '1/6',
        affinitySpeed: 10,
        affinitySpeedRatio: '1/6',
      };

      // stub
      const spy = sinon.stub(CalculateStatTotals.internal, 'natureFilter').returns(30);

      // call
      const result = CalculateStatTotals.interface(input);

      const nature = {
        name: 'hasty',
        adv: 'speed',
        disAdv: 'defence',
      };

      const expectedResult = {
        level: 50,
        baseHitPoints: 20,
        baseAttack: 20,
        baseDefence: 20,
        baseSpecialAttack: 20,
        baseSpecialDefence: 20,
        baseSpeed: 20,

        eVHitPoints: 1,
        eVAttack: 2,
        eVDefence: 3,
        eVSpecialAttack: 4,
        eVSpecialDefence: 5,
        eVSpeed: 6,

        nature: nature,
        natureBoost: 6,
        natureCut: -3,

        affinityHitPoints: 10,
        affinityHitPointsRatio: '1/6',
        affinityAttack: 10,
        affinityAttackRatio: '1/6',
        affinityDefence: 10,
        affinityDefenceRatio: '1/6',
        affinitySpecialAttack: 10,
        affinitySpecialAttackRatio: '1/6',
        affinitySpecialDefence: 10,
        affinitySpecialDefenceRatio: '1/6',
        affinitySpeed: 10,
        affinitySpeedRatio: '1/6',

        totalHitPoints: 61,
        totalAttack: 62,
        totalDefence: 63,
        totalSpecialAttack: 64,
        totalSpecialDefence: 65,
        totalSpeed: 66,
      };

      const spyHitPointCall = spy.getCall(0);
      const spyAttackCall = spy.getCall(1);
      const spyDefenceCall = spy.getCall(2);
      const spySpecialAttackCall = spy.getCall(3);
      const spySpecialDefenceCall = spy.getCall(4);
      const spySpeedCall = spy.getCall(5);

      assert.deepEqual(result, expectedResult);

      // Assert Argument 1
      assert.equal('hitPoints', spyHitPointCall.args[0]);
      assert.equal('attack', spyAttackCall.args[0]);
      assert.equal('defence', spyDefenceCall.args[0]);
      assert.equal('specialAttack', spySpecialAttackCall.args[0]);
      assert.equal('specialDefence', spySpecialDefenceCall.args[0]);
      assert.equal('speed', spySpeedCall.args[0]);

      // Assert Argument 2
      assert.deepEqual(nature, spyHitPointCall.args[1]);
      assert.deepEqual(nature, spyAttackCall.args[1]);
      assert.deepEqual(nature, spyDefenceCall.args[1]);
      assert.deepEqual(nature, spySpecialAttackCall.args[1]);
      assert.deepEqual(nature, spySpecialDefenceCall.args[1]);
      assert.deepEqual(nature, spySpeedCall.args[1]);

      // Assert Argument 3
      assert.equal(6, spyHitPointCall.args[2]);
      assert.equal(6, spyAttackCall.args[2]);
      assert.equal(6, spyDefenceCall.args[2]);
      assert.equal(6, spySpecialAttackCall.args[2]);
      assert.equal(6, spySpecialDefenceCall.args[2]);
      assert.equal(6, spySpeedCall.args[2]);

      // Assert Argument 4
      assert.equal(-3, spyHitPointCall.args[3]);
      assert.equal(-3, spyAttackCall.args[3]);
      assert.equal(-3, spyDefenceCall.args[3]);
      assert.equal(-3, spySpecialAttackCall.args[3]);
      assert.equal(-3, spySpecialDefenceCall.args[3]);
      assert.equal(-3, spySpeedCall.args[3]);

      sinon.restore();
    });
  });
});
