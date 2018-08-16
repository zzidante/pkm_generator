const assign_ev_bonus = function (stats_blob, randomizeNum) {
  const level = stats_blob.level;
  const new_stats_blob = Object.assign({}, stats_blob);
  
  for (let i = 0; i < level; i++) {
    let num = randomizeNum(6);
    
    if (num === 1) {
      new_stats_blob.baseHp++;
    } else if (num === 2) {
      new_stats_blob.baseAttack++;
    } else if (num === 3) {
      new_stats_blob.baseDefence++;
    } else if (num === 4) {
      new_stats_blob.baseSpecialAttack++;
    } else if (num === 5) {
      new_stats_blob.baseSpecialDefence++;
    } else if (num === 6) {
      new_stats_blob.baseSpeed++;
    } else {
      return 'error - make sure to pass in number randomizer (one to six) as a callback';
    }
  }
  return new_stats_blob;
};

module.exports = assign_ev_bonus;