/*jslint node: true */
'use strict';

const insertAt = require('./helpers/insert_at.js');
const capitalize = require('./helpers/capitalize.js');

module.exports = {
  getStats: function  (pokemon, stat) {
    return (
      stat ? 
        { [stat.toLowerCase()]: pokemon.stats[stat.toLowerCase()] }
        : pokemon.stats
    );
  },
  getPrettyStats: function (pokemon) {
    const stats = this.getStats(pokemon);
    let prettyStats = pokemon.name + ' ';

    for (let stat in stats) {
      prettyStats += stats[stat] + ' ';
    }
    return prettyStats;
  },
  buildGeneratorQuery: function (pokemon, lvl) {
    if (lvl < 1 || lvl > 100) {
      return 'Level given must be between 1 and 100.';
    }
    const stats = this.getPrettyStats(pokemon);
    return stats.InsertAt(lvl + ' ', pokemon.name.length + 1);
  },
  getValidMoveByLevel: function (pokemon, lvl) {
    return pokemon.moves
      .filter(move => move.level <= lvl)
      .map(move => move.name);
  },
  evolvesWhen: function (pokemon) {
    return pokemon.evolution.details
      .filter(detail => detail.evolutionStep > pokemon.evolution.currentEvolutionStep)
      .map(detail => `${detail.form.Capitalize()} - Level: ${detail.level || 'none'} -  Condition: ${detail.condition || 'none'}`)
  },
  evValue: function (pokemon, format) {
    const val = pokemon.evYield
      .map(ev => `${ev.type}: ${ev.value}`);

    return format === 'string' ? val[0] : val;
  }
};
