const getUserInput = require('./commands/get_user_input').interface;
const randomizeNumber = require('./commands/randomize_number');
const minifyStats = require('./filters/minify_stats');
const assignEvBonus = require('./commands/assign_ev_bonus');
const fetchNature = require('./commands/fetch_nature').interface;
const deriveAffinity = require('./commands/derive_affinity').interface;
const calculateStatTotals = require('./commands/calculate_stat_totals').interface;

function calculate_new_pokemon() {
  const userInput = getUserInput(process.argv.slice(2));
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
  console.log(calculatedStatTotals);

  // return calculatedStatTotals;
}

module.exports = console.log(calculate_new_pokemon());