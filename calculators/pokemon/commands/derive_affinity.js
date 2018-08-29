let validateIsNumber = require('../../../helpers/validate_is_number.js');

const internalMethods = {
  affinityCalculation: function ({ baseStat: stat, level: level }) {
    validateIsNumber(stat, level);

    if (stat <= 3) {
      return {
        points: Math.floor(level / 6),
        ratio: '1/6',
      };

    } else if (stat <= 7) {
      return {
        points: Math.floor(level / 5),
        ratio: '1/5'
      };

    } else if (stat <= 12) {
      return {
        points: Math.floor(level / 4),
        ratio: '1/4',
      };

    } else if (stat <= 18) {
      return {
        points: Math.floor(level / 3),
        ratio: '1/3',
      };

    } else if (stat >= 19) {
      return {
        points: Math.floor(level / 2),
        ratio: '1/2',
      };

    } else {
      throw new Error(`unhandled error - stat ${stat} - level: ${level}`);
    }
  },
};

const deriveAffinity = function (pokemonObj) {
  const affinityHitPoints = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseHitPoints 
    }
  );

  const affinityAttack = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseAttack 
    }
  );

  const affinityDefence = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseDefence 
    }
  );

  const affinitySpecialAttack = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseSpecialAttack,
    }
  );

  const affinitySpecialDefence = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseSpecialDefence ,
    }
  );

  const affinitySpeed = internalMethods.affinityCalculation(
    { 
      level: pokemonObj.level, 
      baseStat: pokemonObj.baseSpeed,
    }
  );

  return Object.assign(
    pokemonObj,
    {
      affinityHitPoints: affinityHitPoints.points,
      affinityHitPointsRatio: affinityHitPoints.ratio,

      affinityAttack: affinityAttack.points,
      affinityAttackRatio: affinityAttack.ratio,

      affinityDefence: affinityDefence.points,
      affinityDefenceRatio: affinityDefence.ratio,

      affinitySpecialAttack: affinitySpecialAttack.points,
      affinitySpecialAttackRatio: affinitySpecialAttack.ratio,

      affinitySpecialDefence: affinitySpecialDefence.points,
      affinitySpecialDefenceRatio: affinitySpecialDefence.ratio,

      affinitySpeed: affinitySpeed.points,
      affinitySpeedRatio: affinitySpeed.ratio,
    }
  );
};

module.exports = {
  interface: deriveAffinity,
  internal: internalMethods,
};
