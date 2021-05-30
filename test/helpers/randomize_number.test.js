const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

let randomizeNumber = require('../../helpers/randomize_number.js');

describe('calculators/pokemon/commands/randomize_number.js', function () {
  describe('randomizeNumber(arg)', function () {
    it('it returns a number <= its input: 5', function () {
      // spy
      const mathFloor = sinon.spy(Math, 'floor');

      // vars
      const input = 10;
      const expectedResult = 5;
      const randNumber = 0.4;

      // stub
      sinon.stub(Math, 'random').returns(randNumber);

      // call the method
      const result = randomizeNumber(input);

      // assertions
      sinon.assert.calledWith(mathFloor, (randNumber * input));
      assert.equal(result, expectedResult);

      // reset
      sinon.restore();
    });

    it('it returns a number <= its input: 1', function () {
      // spy
      const mathFloor = sinon.spy(Math, 'floor');

      // vars
      const input = 10;
      const expectedResult = 1;
      const randNumber = 0.01;

      // stub
      sinon.stub(Math, 'random').returns(randNumber);

      // call the method
      const result = randomizeNumber(input);

      // assertions
      sinon.assert.calledWith(mathFloor, (randNumber * input));
      assert.equal(result, expectedResult);

      // reset
      sinon.restore();
    });
    it('it returns a number <= its input: 10', function () {
      // spy
      const mathFloor = sinon.spy(Math, 'floor');

      // vars
      const input = 10;
      const expectedResult = 10;
      const randNumber = 0.99;

      // stub
      sinon.stub(Math, 'random').returns(randNumber);

      // call the method
      const result = randomizeNumber(input);

      // assertions
      sinon.assert.calledWith(mathFloor, (randNumber * input));
      assert.equal(result, expectedResult);

      // reset
      sinon.restore();
    });
  });
});
