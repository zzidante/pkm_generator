const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let FetchNature = require('../../../../calculators/pokemon/commands/fetch_nature.js').internal;

describe('calculators/pokemon/commands/fetch_nature.js', function () {
  describe('internal = {}', function () {
    describe('natureStatChangeByLevel()', function () {
      it('returns appropriate nature stats for a boost', function () {
        const input = {level: 25, advantage: true};
        const expectedResults = 6;
        const results = FetchNature.natureStatChangeByLevel(input);

        assert.equal(results, expectedResults);
      });     

      it('returns appropriate nature stats for a cut', function () {
        const input = {level: 25, advantage: false};
        const expectedResults = -3;
        const results = FetchNature.natureStatChangeByLevel(input);

        assert.equal(results, expectedResults);
      }); 
    });

    describe('calculateNatureChanges()', function () {
      it('returns a new object with given key/value added', function () {
        // spy
        sinon.spy(FetchNature, 'calculateNatureChanges');

        // stubs
        const natureStatChangeByLevel = sinon
          .stub(FetchNature, 'natureStatChangeByLevel')
          .onCall(0)
          .returns('test')
          .onCall(1)
          .returns('sample');
        
        // call the method
        const results = FetchNature.calculateNatureChanges({ level: 1 });

        // assertions
        sinon.assert.calledWith(natureStatChangeByLevel, {level: 1, advantage: true});
        sinon.assert.calledWith(natureStatChangeByLevel, {level: 1, advantage: false});

        assert.deepEqual(results, {level: 1, natureBoost: 'test', natureCut: 'sample'});
        sinon.restore();
      });     
    });
  });
});
