const calculateStatTotals = function(pokemonObj) {
  const { 
    baseHitPoints, affinityHitPoints, eVHitPoints,
    baseAttack, affinityAttack, eVAttack,
    baseDefence, affinityDefence, eVDefence,
    baseSpecialAttack, affinitySpecialAttack, eVSpecialAttack,
    baseSpecialDefence, affinitySpecialDefence, eVSpecialDefence,
    baseSpeed, affinitySpeed, eVSpeed,
    nature, natureBoost, natureCut
  } = pokemonObj;

  // need to iterate over each total value and ensure there are #s < 2. Must be 2 in that case

  return Object.assign(
    pokemonObj,      
    {
      totalHitPoints: (
        baseHitPoints + affinityHitPoints + eVHitPoints + internalMethods.natureFilter('hitPoints', nature, natureBoost, natureCut)
      ),
      totalAttack: (
        baseAttack + affinityAttack + eVAttack + internalMethods.natureFilter('attack', nature, natureBoost, natureCut)
      ),
      totalDefence: (
        baseDefence + affinityDefence + eVDefence + + internalMethods.natureFilter('defence', nature, natureBoost, natureCut)
      ),
      totalSpecialAttack: (
        baseSpecialAttack + affinitySpecialAttack + eVSpecialAttack + internalMethods.natureFilter('specialAttack', nature, natureBoost, natureCut)
      ),
      totalSpecialDefence: (
        baseSpecialDefence + affinitySpecialDefence + eVSpecialDefence + internalMethods.natureFilter('specialDefence', nature, natureBoost, natureCut)
      ),
      totalSpeed: (
        baseSpeed + affinitySpeed + eVSpeed + + internalMethods.natureFilter('speed', nature, natureBoost, natureCut)
      ),
    }
  );
};

const internalMethods = {
  natureFilter: function(name, nature, boost, cut) {
    const { adv, disAdv } = nature;

    const hashMap = {
      'hitPoints': 0, 
      'attack': 0, 
      'defence': 0, 
      'specialAttack': 0, 
      'specialDefence': 0, 
      'speed': 0, 
    };

    if (name == adv) {
      hashMap[name] = boost;
    }

    if (name == disAdv) {
      hashMap[name] = cut;
    }

    return hashMap[name];
  }
};

module.exports = {
  internal: internalMethods,
  interface: calculateStatTotals,
};
