//** Public Interface */

const getUserInput = () => {
  const input = process.argv.slice(2);
  checkArguments(input);

  const inputToInt = formatToNum(input.slice(1));
  
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

module.exports = getUserInput;

//** Private Methods */

const checkArguments = (input) => {
  checkArgumentLength(input);
  checkArgumentTypes(input);
};

const checkArgumentLength = (input) => {
  if (input.length < 8 || input.length > 8) {
    throw new Error('Please supply exactly 8 arguments');
  }
};

const checkArgumentTypes = (input) => {
  const typeCheck = input.filter((stat, i) => {
    if (i > 0) {
      return !isNaN(parseFloat(stat));
    }
  });

  if (typeCheck.length !== input.length - 1) {
    throw new Error('Please use numbers for the last 7 arguments');
  }
};

const formatToNum = (input) => {
  return input.map((a) => parseInt(a));
};

