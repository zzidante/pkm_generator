const fetchNature = function(
  {
    pokemonObj: pokemonObj, 
    rolledNature: rolledNature, 
    dataOnly: dataOnly = false
  }
) {
  if (rolledNature === 1) {
    pokemonObj.nature = {
      name: 'lonely',
      adv: 'atk',
      disAdv: 'defe'
    };
  } else if (rolledNature === 2) {
    pokemonObj.nature = {
      name: 'brave',
      adv: 'atk',
      disAdv: 'spd'
    };
  } else if (rolledNature === 3) {
    pokemonObj.nature = {
      name: 'adament',
      adv: 'atk',
      disAdv: 'spAtk'
    };
  } else if (rolledNature === 4) {
    pokemonObj.nature = {
      name: 'naughty',
      adv: 'atk',
      disAdv: 'spDefe'
    };
  } else if (rolledNature === 5) {
    pokemonObj.nature = {
      name: 'bold',
      adv: 'defe',
      disAdv: 'atk'
    };
  } else if (rolledNature === 6) {
    pokemonObj.nature = {
      name: 'relaxed',
      adv: 'defe',
      disAdv: 'spd'
    };
  } else if (rolledNature === 7) {
    pokemonObj.nature = {
      name: 'impish',
      adv: 'defe',
      disAdv: 'spAtk'
    };
  } else if (rolledNature === 8) {
    pokemonObj.nature = {
      name: 'lax',
      adv: 'defe',
      disAdv: 'spDef'
    };
  } else if (rolledNature === 9) {
    pokemonObj.nature = {
      name: 'timid',
      adv: 'spd',
      disAdv: 'atk'
    };
  } else if (rolledNature === 10) {
    pokemonObj.nature = {
      name: 'hasty',
      adv: 'spd',
      disAdv: 'defe'
    };
  } else if (rolledNature === 11) {
    pokemonObj.nature = {
      name: 'jolly',
      adv: 'spd',
      disAdv: 'spAtk'
    };
  } else if (rolledNature === 12) {
    pokemonObj.nature = {
      name: 'naive',
      adv: 'spd',
      disAdv: 'spDefe'
    };
  } else if (rolledNature === 13) {
    pokemonObj.nature = {
      name: 'modest',
      adv: 'spAtk',
      disAdv: 'atk'
    };
  } else if (rolledNature === 14) {
    pokemonObj.nature = {
      name: 'mild',
      adv: 'spAtk',
      disAdv: 'defe'
    };
  } else if (rolledNature === 15) {
    pokemonObj.nature = {
      name: 'quiet',
      adv: 'spAtk',
      disAdv: 'spd'
    };
  } else if (rolledNature === 16) {
    pokemonObj.nature = {
      name: 'rash',
      adv: 'spAtk',
      disAdv: 'spDefe'
    };
  } else if (rolledNature === 17) {
    pokemonObj.nature = {
      name: 'calm',
      adv: 'spDefe',
      disAdv: 'atk'
    };
  } else if (rolledNature === 18) {
    pokemonObj.nature = {
      name: 'gentle',
      adv: 'spDefe',
      disAdv: 'defe'
    };
  } else if (rolledNature === 19) {
    pokemonObj.nature = {
      name: 'sassy',
      adv: 'spDefe',
      disAdv: 'spd'
    };
  } else if (rolledNature === 20) {
    pokemonObj.nature = {
      name: 'careful',
      adv: 'spDefe',
      disAdv: 'spAtk'
    };
  } else {
    throw new Error(`rolledNature given: ${rolledNature}. Expected 1 - 20`);
  }
  // convienience method ability to not assign a value but see the nature instead
  if (dataOnly) { return pokemonObj.nature; }

  return internalMethods.calculateNatureChanges(pokemonObj);
};

const internalMethods = {
  natureStatChangeByLevel: function({level: level, advantage: advantage}) {
    if (advantage) {
      return 2 + (Math.floor(level / 10) * 2);    
    } else {
      return (1 + Math.floor(level / 10)) * (-1);
    }
  },

  calculateNatureChanges: function(pokemonObj) {
    if (!pokemonObj.level || isNaN(pokemonObj.level)) { 
      throw new Error(`Expected 'object: {level: <number>}' in args - given: pokemonObj.level = ${pokemonObj.level}`); 
    }

    return Object.assign(
      {
        natureBoost: this.natureStatChangeByLevel({level: pokemonObj.level, advantage: true}),
        natureCut: this.natureStatChangeByLevel({level: pokemonObj.level, advantage: false}),
      },
      pokemonObj
    );
  }
};

module.exports = {
  interface: fetchNature,
  internal: internalMethods,
};