//** Public Interface */

const getUserInput = (input) => {
  internalMethods.filterArguments(input);

  const inputToInt = internalMethods.formatToNum(input.slice(1));
  
  return {
    name: input[0],
    level: inputToInt[0],
    baseHitPoints: inputToInt[1],
    baseAttack: inputToInt[2],
    baseDefense: inputToInt[3],
    baseSpecialAttack: inputToInt[4],
    baseSpecialDefense: inputToInt[5],
    baseSpeed: inputToInt[6],
  };
};

//** Internal Interface */
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
    
    const lengthDifference = typeCheck.length !== input.length - 1;

    if (lengthDifference) {
      throw new Error('Please use numbers for the last 7 arguments');
    }
    return lengthDifference;
  },
  
  filterArguments: function (input) {
    this.checkArgumentLength(input);
    this.checkArgumentTypes(input);
  },

  formatToNum: function (input) {
    return input.map((a) => parseInt(a));
  }
};

module.exports = {
  interface: getUserInput,
  internal: internalMethods,
};