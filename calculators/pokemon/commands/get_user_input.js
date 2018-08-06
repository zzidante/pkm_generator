//** Public Interface */

const getUserInput = (input) => {
  internalMethods.checkArguments(input);

  const inputToInt = internalMethods.formatToNum(input.slice(1));
  
  return {
    name: input[0],
    level: inputToInt[0],
    baseHp: inputToInt[1],
    baseAttack: inputToInt[2],
    baseDefense: inputToInt[3],
    baseSpecialAttack: inputToInt[4],
    baseSpecialDefense: inputToInt[5],
    baseSpeed: inputToInt[6],
  };
};

const internalMethods = {

  checkArgumentLength: function (input) {
    if (input.length < 8 || input.length > 8 || input.constructor !== Array) {
      throw new Error('Please supply exactly 8 arguments following `node generate_pokemon.js`');
    }
    return input.length;
  },
  
  checkArgumentTypes: function (input) {
    const typeCheck = input.filter((stat, i) => {
      if (i > 0) {
        return !isNaN(parseFloat(stat));
      }
    });
    if (typeCheck.length !== input.length - 1) {
      throw new Error('Please use numbers for the last 7 arguments');
    }
  },
  
  checkArguments: function (input) {
    this.checkArgumentLength(input);
    this.checkArgumentTypes(input);
  },

  formatToNum: function (input) {
    return input.map((a) => parseInt(a));
  }
};

module.exports = {
  interface: getUserInput,
  internalMethods: internalMethods,
};