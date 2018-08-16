module.exports = function minifyStats(stat_blob) {
  for(let stat in stat_blob) {
    if (stat !== 'level' && stat !== 'name') {
      stat_blob[stat] = Math.round(stat_blob[stat] / 10);
    }
  }
  return stat_blob;  
};
