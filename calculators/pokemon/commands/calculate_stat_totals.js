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

  return Object.assign(
    pokemonObj,      
    {
      hitPointsTotal: (
        baseHitPoints + affinityHitPoints + eVHitPoints + internalMethods.natureFilter('hitPoints', nature, natureBoost, natureCut)
      ),
      attackTotal: (
        baseAttack + affinityAttack + eVAttack + internalMethods.natureFilter('attack', nature, natureBoost, natureCut)
      ),
      defenceTotal: (
        baseDefence + affinityDefence + eVDefence + + internalMethods.natureFilter('defence', nature, natureBoost, natureCut)
      ),
      specialAttackTotal: (
        baseSpecialAttack + affinitySpecialAttack + eVSpecialAttack + internalMethods.natureFilter('specialAttack', nature, natureBoost, natureCut)
      ),
      specialDefenceTotal: (
        baseSpecialDefence + affinitySpecialDefence + eVSpecialDefence + internalMethods.natureFilter('specialDefence', nature, natureBoost, natureCut)
      ),
      speedTotal: (
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
