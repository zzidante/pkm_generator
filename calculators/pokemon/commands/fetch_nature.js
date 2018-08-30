const fetchNature = function(
  {
    pokemonObj, 
    rolledNature, 
    dataOnly = false
  }
) {
  if (rolledNature === 1) {
    pokemonObj.nature = {
      name: 'lonely',
      adv: 'attack',
      disAdv: 'defence'
    };
  } else if (rolledNature === 2) {
    pokemonObj.nature = {
      name: 'brave',
      adv: 'attack',
      disAdv: 'speed'
    };
  } else if (rolledNature === 3) {
    pokemonObj.nature = {
      name: 'adament',
      adv: 'attack',
      disAdv: 'specialAttack'
    };
  } else if (rolledNature === 4) {
    pokemonObj.nature = {
      name: 'naughty',
      adv: 'attack',
      disAdv: 'specialDefence'
    };
  } else if (rolledNature === 5) {
    pokemonObj.nature = {
      name: 'bold',
      adv: 'defence',
      disAdv: 'attack'
    };
  } else if (rolledNature === 6) {
    pokemonObj.nature = {
      name: 'relaxed',
      adv: 'defence',
      disAdv: 'speed'
    };
  } else if (rolledNature === 7) {
    pokemonObj.nature = {
      name: 'impish',
      adv: 'defence',
      disAdv: 'specialAttack'
    };
  } else if (rolledNature === 8) {
    pokemonObj.nature = {
      name: 'lax',
      adv: 'defence',
      disAdv: 'spDef'
    };
  } else if (rolledNature === 9) {
    pokemonObj.nature = {
      name: 'timid',
      adv: 'speed',
      disAdv: 'attack'
    };
  } else if (rolledNature === 10) {
    pokemonObj.nature = {
      name: 'hasty',
      adv: 'speed',
      disAdv: 'defence'
    };
  } else if (rolledNature === 11) {
    pokemonObj.nature = {
      name: 'jolly',
      adv: 'speed',
      disAdv: 'specialAttack'
    };
  } else if (rolledNature === 12) {
    pokemonObj.nature = {
      name: 'naive',
      adv: 'speed',
      disAdv: 'specialDefence'
    };
  } else if (rolledNature === 13) {
    pokemonObj.nature = {
      name: 'modest',
      adv: 'specialAttack',
      disAdv: 'attack'
    };
  } else if (rolledNature === 14) {
    pokemonObj.nature = {
      name: 'mild',
      adv: 'specialAttack',
      disAdv: 'defence'
    };
  } else if (rolledNature === 15) {
    pokemonObj.nature = {
      name: 'quiet',
      adv: 'specialAttack',
      disAdv: 'speed'
    };
  } else if (rolledNature === 16) {
    pokemonObj.nature = {
      name: 'rash',
      adv: 'specialAttack',
      disAdv: 'specialDefence'
    };
  } else if (rolledNature === 17) {
    pokemonObj.nature = {
      name: 'calm',
      adv: 'specialDefence',
      disAdv: 'attack'
    };
  } else if (rolledNature === 18) {
    pokemonObj.nature = {
      name: 'gentle',
      adv: 'specialDefence',
      disAdv: 'defence'
    };
  } else if (rolledNature === 19) {
    pokemonObj.nature = {
      name: 'sassy',
      adv: 'specialDefence',
      disAdv: 'speed'
    };
  } else if (rolledNature === 20) {
    pokemonObj.nature = {
      name: 'careful',
      adv: 'specialDefence',
      disAdv: 'specialAttack'
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
      pokemonObj,      
      {
        natureBoost: this.natureStatChangeByLevel({level: pokemonObj.level, advantage: true}),
        natureCut: this.natureStatChangeByLevel({level: pokemonObj.level, advantage: false}),
      }
    );
  }
};

module.exports = {
  interface: fetchNature,
  internal: internalMethods,
};