const getUserInput = require('./commands/get_user_input');

function calculate_new_pokemon() {
  const userInput =  getUserInput();
  return userInput;
}

module.exports = console.log(calculate_new_pokemon());