const insertAt = require('./helpers/insert_at.js');

module.exports = {
    getStats: function (pokemon, stat) {
      if (stat) {
        const lStat = stat.toLowerCase();
        return { [lStat]: pokemon.stats[lStat] };
      }
      return pokemon.stats;
    },
    getPrettyStats: function (pokemon) {
      const stats = this.getStats(pokemon);
      let prettyStats = '';
      prettyStats += pokemon.name + ' ';
  
      for (let stat in stats) {
        prettyStats += stats[stat] + ' ';
      }
      return prettyStats;
    },
    buildGeneratorQuery: function(pokemon, lvl) {
      if (lvl < 1 || lvl > 100) {
        return 'Level given must be between 1 and 100.';
      }
      const stats = this.getPrettyStats(pokemon);
      return stats.InsertAt(lvl + ' ', pokemon.name.length + 1);
    },
    getValidMoveName: function(pokemon, lvl) {
      return pokemon.moves
        .filter(move => move.level <= lvl )
        .map(move => move.name );
    },
};
