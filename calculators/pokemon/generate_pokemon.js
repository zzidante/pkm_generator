const getUserInput = require('./commands/get_user_input').interface;
const randomizeNumber = require('./commands/randomize_number');
const minifyStats = require('./filters/minify_stats');
const assignEvBonus = require('./commands/assign_ev_bonus').interface;
const generateNature = require('./commands/generate_nature').interface;

function calculate_new_pokemon() {
  const userInput = getUserInput(process.argv.slice(2));
  const minifiedStats = minifyStats(userInput);
  const assignedEvPoints = assignEvBonus(minifiedStats, randomizeNumber);
  const generatedNature = generateNature(assignedEvPoints, randomizeNumber(20));

  return generatedNature;
}

module.exports = console.log(calculate_new_pokemon());