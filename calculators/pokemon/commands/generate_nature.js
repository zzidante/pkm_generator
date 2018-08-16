const generateNature = function(pokemonObj, randomizeNum) {
  const nature = randomizeNum(20);

  if (nature === 1) {
    pokemonObj.nature = {
      name: 'lonely',
      adv: 'atk',
      disAdv: 'defe'
    };
  } else if (nature === 2) {
    pokemonObj.nature = {
      name: 'brave',
      adv: 'atk',
      disAdv: 'spd'
    };
  } else if (nature === 3) {
    pokemonObj.nature = {
      name: 'adament',
      adv: 'atk',
      disAdv: 'spAtk'
    };
  } else if (nature === 4) {
    pokemonObj.nature = {
      name: 'naughty',
      adv: 'atk',
      disAdv: 'spDefe'
    };
  } else if (nature === 5) {
    pokemonObj.nature = {
      name: 'bold',
      adv: 'defe',
      disAdv: 'atk'
    };
  } else if (nature === 6) {
    pokemonObj.nature = {
      name: 'relaxed',
      adv: 'defe',
      disAdv: 'spd'
    };
  } else if (nature === 7) {
    pokemonObj.nature = {
      name: 'impish',
      adv: 'defe',
      disAdv: 'spAtk'
    };
  } else if (nature === 8) {
    pokemonObj.nature = {
      name: 'lax',
      adv: 'defe',
      disAdv: 'spDef'
    };
  } else if (nature === 9) {
    pokemonObj.nature = {
      name: 'timid',
      adv: 'spd',
      disAdv: 'atk'
    };
  } else if (nature === 10) {
    pokemonObj.nature = {
      name: 'hasty',
      adv: 'spd',
      disAdv: 'defe'
    };
  } else if (nature === 11) {
    pokemonObj.nature = {
      name: 'jolly',
      adv: 'spd',
      disAdv: 'spAtk'
    };
  } else if (nature === 12) {
    pokemonObj.nature = {
      name: 'naive',
      adv: 'spd',
      disAdv: 'spDefe'
    };
  } else if (nature === 13) {
    pokemonObj.nature = {
      name: 'modest',
      adv: 'spAtk',
      disAdv: 'atk'
    };
  } else if (nature === 14) {
    pokemonObj.nature = {
      name: 'mild',
      adv: 'spAtk',
      disAdv: 'defe'
    };
  } else if (nature === 15) {
    pokemonObj.nature = {
      name: 'quiet',
      adv: 'spAtk',
      disAdv: 'spd'
    };
  } else if (nature === 16) {
    pokemonObj.nature = {
      name: 'rash',
      adv: 'spAtk',
      disAdv: 'spDefe'
    };
  } else if (nature === 17) {
    pokemonObj.nature = {
      name: 'calm',
      adv: 'spDefe',
      disAdv: 'atk'
    };
  } else if (nature === 18) {
    pokemonObj.nature = {
      name: 'gentle',
      adv: 'spDefe',
      disAdv: 'defe'
    };
  } else if (nature === 19) {
    pokemonObj.nature = {
      name: 'sassy',
      adv: 'spDefe',
      disAdv: 'spd'
    };
  } else if (nature === 20) {
    pokemonObj.nature = {
      name: 'careful',
      adv: 'spDefe',
      disAdv: 'spAtk'
    };
  } else {
    return 'error';
  }
  return calculateNatureChanges(pokemonObj);
};

const natureStatChangeByLevel = function({level: level, advantage: advantage}) {
  if (advantage) {
    return 2 + (Math.floor(level / 10) * 2);    
  } else {
    return (1 + Math.floor(level / 10)) * (-1);
  }
};

const calculateNatureChanges = function(pokemonObj) {
  let level = pokemonObj.level;

  pokemonObj.natureBoost = natureStatChangeByLevel({level: level, advantage: true});
  pokemonObj.natureCut = natureStatChangeByLevel({level: level, advantage: false}); 

  return pokemonObj;
};


module.exports = {
  interface: generateNature,
  internal: {
    natureStatChangeByLevel: natureStatChangeByLevel,
    calculateNatureChanges: calculateNatureChanges,
  }
};