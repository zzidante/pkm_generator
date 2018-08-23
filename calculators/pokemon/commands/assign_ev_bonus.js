const assign_ev_bonus = function (stats_blob, randomizeNum) {
  const level = stats_blob.level;
  const init_ev_bonus = { 
    eVHitPoints: 0,
    eVAttack: 0,
    eVDefence: 0,
    eVSpecialAttack: 0,
    eVSpecialDefence: 0,
    eVSpeed: 0,
  };
  const new_stats_blob = Object.assign({}, stats_blob, init_ev_bonus);

  for (let i = 0; i < level; i++) {
    let num = randomizeNum(6);
    
    if (num === 1) {
      new_stats_blob.eVHitPoints++;
    } else if (num === 2) {
      new_stats_blob.eVAttack++;
    } else if (num === 3) {
      new_stats_blob.eVDefence++;
    } else if (num === 4) {
      new_stats_blob.eVSpecialAttack++;
    } else if (num === 5) {
      new_stats_blob.eVSpecialDefence++;
    } else if (num === 6) {
      new_stats_blob.eVSpeed++;
    } else {
      return 'error - make sure to pass in number randomizer (one to six) as a callback';
    }
  }
  return new_stats_blob;
};

module.exports = assign_ev_bonus;