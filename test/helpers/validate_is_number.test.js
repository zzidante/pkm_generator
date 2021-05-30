let chai = require('chai');
var assert = chai.assert;

let ValidateIsNumber = require('../../helpers/validate_is_number.js');

describe('helpers/minify_stats.js', function () {
  describe('validateIsNumber()', function () {
    it('multiple number arguments return no error', function () {
      const results = ValidateIsNumber(1,2,3);
      const expectedResults = true;

      assert.equal(results, expectedResults);
    });

    it('one number argument returns no error', function () {
      const results = ValidateIsNumber(9);
      const expectedResults = true;

      assert.equal(results, expectedResults);
    });

    it('a string as a number returns an error', function () {
      assert.throws(
        () => ValidateIsNumber('9'), Error, 'input has a typeof string with value "9" but was expecting a number.'
      );
    });

    it('an object returns an error', function () {
      assert.throws(
        () => ValidateIsNumber({one: 1}), Error, 'input has a typeof object with value {"one":1} but was expecting a number.'
      );
    });

    it('a function returns an error', function () {
      assert.throws(
        () => ValidateIsNumber(function(){return true;}), Error, 'input has a typeof function with value function(){return true;} but was expecting a number.'
      );
    });

    it('an array of words returns an error', function () {
      assert.throws(
        () => ValidateIsNumber(['hello', 'my']), Error, 'input has a typeof object with value ["hello","my"] but was expecting a number.'
      );
    });

    it('an array of numbers returns an error', function () {
      assert.throws(
        () => ValidateIsNumber([1, 2, 3]), Error, 'input has a typeof object with value [1,2,3] but was expecting a number.'
      );
    });

    it('an empty string returns an error', function () {
      assert.throws(
        () => ValidateIsNumber(''), Error, 'input has a typeof string with value "" but was expecting a number.'
      );
    });
  });
});
