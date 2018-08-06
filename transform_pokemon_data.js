'use strict';
require('./helpers/insert_at.js'); // string.InsertAt(item, position)
require('./helpers/capitalize.js'); // string.Capitalize(*true) makes rest of string lowercase

module.exports = {
  getStats: (pkmn, stat) => {
    const lowerStat = stat.toLowerCase();
    return stat ? { [lowerStat]: pkmn.stats[lowerStat] } : pkmn.stats;
  },

  getPrettyStats: function (pkmn) {
    const stats = this.getStats(pkmn);
    let prettyStats = pkmn.name + ' ';

    for (let stat in stats) {
      prettyStats += stats[stat] + ' ';
    }
    return prettyStats;
  },

  buildGeneratorQuery: function (pkmn, lvl) {
    if (lvl < 1 || lvl > 100) {
      return 'Level given must be between 1 and 100.';
    }
    return this
      .getPrettyStats(pkmn)
      .InsertAt(lvl + ' ', pkmn.name.length + 1);
  },

  getValidMoveByLevel: (pkmn, lvl) => pkmn.moves
    .filter(move => move.level <= lvl)
    .map(move => move.name),

  evolvesWhen: (pkmn) => pkmn.evolution.details
    .filter(detail => detail.evolutionStep > pkmn.evolution.currentEvolutionStep)
    .map(detail => `${detail.form.Capitalize()} - Level: ${detail.level || 'none'} -  Condition: ${detail.condition || 'none'}`),

  evValue: (pkmn, format) => {
    const val = pkmn.evYield
      .map(ev => `${ev.type}: ${ev.value}`);

    return format === ('string' || 'str') ? val[0] : val;
  }
};
