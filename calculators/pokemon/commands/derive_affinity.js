// let validateIsNumber = require('../../../../helpers/validate_is_number.js').validateIsNumber;

const internalMethods = {
  affinityCalculation: function ({baseStat: stat, level: level}) {
    // validateIsNumber(stat, level);

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
      throw new Error(`stat input is invalid: ${stat}`);
    }
  },
};

const deriveAffinity = function (pokemonObj) {
  return Object.assign(
    {
      affinityHitPoints: this.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseHitPoints}
      ),
      affinityAttack: this.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseAttack}
      ),
      affinityDefense: this.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseDefence}
      ),
      affinitySpecialAttack: this.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseSpecialAttack}
      ),
      affinitySpecialDefense: this.affinityCalculation(
        {level: pokemonObj.level, baseStat: pokemonObj.baseSpecialDefence}
      ),
      affinitySpeed: this.affinityCalculation(
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
