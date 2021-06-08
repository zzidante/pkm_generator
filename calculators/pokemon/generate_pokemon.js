const assignEvBonus = require('./commands/assign_ev_bonus');
const calculateStatTotals = require('./commands/calculate_stat_totals').interface;
const deriveAffinity = require('./commands/derive_affinity').interface;
const fetchNature = require('./commands/fetch_nature').interface;
const getUserInput = require('./commands/get_user_input').interface;
const minifyStats = require('../filters/minify_stats');
const randomizeNumber = require('../../helpers/randomize_number');

function calculate_new_pokemon(pokemon) {
  const userInput = getUserInput(pokemon);
  const minifiedStats = minifyStats(userInput);
  const assignedEvPoints = assignEvBonus(minifiedStats, randomizeNumber);
  const generatedNature = fetchNature(
    {
      pokemonObj: assignedEvPoints,
      rolledNature: randomizeNumber(20)
    }
  );
  const derivedAffinity = deriveAffinity(generatedNature);
  const calculatedStatTotals = calculateStatTotals(derivedAffinity);

  return calculatedStatTotals;
}

module.exports = {
  interface: calculate_new_pokemon
};