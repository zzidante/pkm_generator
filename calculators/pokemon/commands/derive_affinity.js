let validateIsNumber = require('../../../helpers/validate_is_number.js');

const internalMethods = {
  affinityCalculation: function ({baseStat: stat, level: level}) {
    validateIsNumber(stat, level);

    if (stat <= 3) {
      return Math.floor(level / 6);
    } else if (stat <= 7) {
      return Math.floor(level / 5);
    } else if (stat <= 12) {
      return Math.floor(level / 4);
    } else if (stat <= 18) {
      return Math.floor(level / 3);
    } else if (stat >= 19) {
      return Math.floor(level / 2);
    } else {
      throw new Error(`unhandled error - stat ${stat} - level: ${level}`);
    }
  },
};

const deriveAffinity = function (pokemonObj) {
  return Object.assign(
    {
      affinityHitPoints: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseHitPoints}
      ),
      affinityAttack: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseAttack}
      ),
      affinityDefence: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseDefence}
      ),
      affinitySpecialAttack: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseSpecialAttack}
      ),
      affinitySpecialDefence: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseSpecialDefence}
      ),
      affinitySpeed: internalMethods.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseSpeed}
      ),
    },
    pokemonObj
  );
};

module.exports = {
  interface: deriveAffinity,
  internal: internalMethods,
};
