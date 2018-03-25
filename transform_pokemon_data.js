const insertAt = require('./helpers/insert_at.js');

module.exports = {
    getStats: function (name) {
      return pokemon[name].stats;
    },
    getPrettyStats: function (name) {
      const stats = this.getStats(name);
      let value = '';
      value += name + ' ';
  
      for (let stat in stats) {
        value += stats[stat] + ' ';
      }
      return value;
    },
    buildGeneratorQuery: function(name, lvl) {
      if (lvl < 1 || lvl > 100) {
        return 'Level given must be between 1 and 100.';
      }
      const stats = this.getPrettyStats(name);
      return stats.InsertAt(lvl + ' ', name.length + 1);
    },
    getValidMoveName: function(name, lvl) {
      const moves = pokemon[name].moves;
      let moveList = [];
  
      moves.forEach(function(move) {
        if (move.level <= lvl){
          moveList.push(move.name);
        }
      }, this);
      return moveList
    },
};
