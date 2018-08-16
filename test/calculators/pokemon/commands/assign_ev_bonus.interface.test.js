let chai = require('chai');
var assert = chai.assert;

let assignEvBonuses = require('../../../../calculators/pokemon/commands/assign_ev_bonus.js');

describe('calculators/pokemon/commands/assign_ev_bonus.js', function () {
  describe('AssignEvBonuses()', function () {
    const input = {
      name: 'Test',
      level: 10,
      baseHp: 1,
      baseAttack: 1,
      baseDefence: 1,
      baseSpecialAttack: 1,
      baseSpecialDefence: 1,
      baseSpeed: 1,
    };

    it('adds to baseHp', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 11,
        baseAttack: 1,
        baseDefence: 1,
        baseSpecialAttack: 1,
        baseSpecialDefence: 1,
        baseSpeed: 1,
      };

      const randomizeNumber = function() { return 1; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });

    it('adds to baseAttack', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 1,
        baseAttack: 11,
        baseDefence: 1,
        baseSpecialAttack: 1,
        baseSpecialDefence: 1,
        baseSpeed: 1,
      };

      const randomizeNumber = function() { return 2; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
    it('adds to baseDefence', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 1,
        baseAttack: 1,
        baseDefence: 11,
        baseSpecialAttack: 1,
        baseSpecialDefence: 1,
        baseSpeed: 1,
      };

      const randomizeNumber = function() { return 3; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
    it('adds to baseSpecialAttack', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 1,
        baseAttack: 1,
        baseDefence: 1,
        baseSpecialAttack: 11,
        baseSpecialDefence: 1,
        baseSpeed: 1,
      };

      const randomizeNumber = function() { return 4; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
    it('adds to baseSpecialDefence', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 1,
        baseAttack: 1,
        baseDefence: 1,
        baseSpecialAttack: 1,
        baseSpecialDefence: 11,
        baseSpeed: 1,
      };

      const randomizeNumber = function() { return 5; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
    it('adds to baseSpecialDefence', function () {
      const expectedResults = {
        name: 'Test',
        level: 10,
        baseHp: 1,
        baseAttack: 1,
        baseDefence: 1,
        baseSpecialAttack: 1,
        baseSpecialDefence: 1,
        baseSpeed: 11,
      };

      const randomizeNumber = function() { return 6; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
    it('adds to baseSpecialDefence', function () {
      const expectedResults = 'error - make sure to pass in number randomizer (one to six) as a callback';

      const randomizeNumber = function() { return 7; };
      const results = assignEvBonuses(input, randomizeNumber);
      assert.deepEqual(results, expectedResults);
    });
  });
});
