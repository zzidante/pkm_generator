module.exports = function(...input) {
  input.forEach((value)=> {
    if (isNaN(value) || typeof value === 'string') {
      throw new Error(
        `input has a typeof ${
          typeof value
        } with value ${
          typeof value == 'function' ? value : JSON.stringify(value)
        } but was expecting a number.`
      );
    }
  });
  return true;
};
