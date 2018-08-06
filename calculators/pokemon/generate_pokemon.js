const getUserInput = require('./commands/get_user_input');

function calculate_new_pokemon() {
  const userInput =  getUserInput(process.argv.slice(2));
  return userInput;
}

module.exports = console.log(calculate_new_pokemon());