let user_input = process.argv;

function ask_user_return_pkmnObj(user_input) {
  return get_pokemon(
    user_input[2], 
    parseInt(user_input[3]), 
    parseInt(user_input[4]), 
    parseInt(user_input[5]), 
    parseInt(user_input[6]), 
    parseInt(user_input[7]), 
    parseInt(user_input[8]), 
    parseInt(user_input[9])
  );
};

function randomizeNum(numUpto) {
  return Math.floor(Math.random() * numUpto) + 1;  
};

function get_pokemon(name, level, baseHp, baseAtk, baseDefe, baseSpAtk, baseSpDefe, baseSpd) {
  pokemonObj = {
    name: name,
    level: level,
    baseHp: baseHp,
    baseAtk: baseAtk,
    baseDefe: baseDefe,
    baseSpAtk: baseSpAtk,
    baseSpDefe: baseSpDefe,
    baseSpd: baseSpd
  };
  return assignEvBonus(pokemonObj);
}

function assignEvBonus(pokemonObj) {
  const lvl = pokemonObj.level;

  let evHp = 0;
  let evAtk = 0;
  let evDefe = 0;
  let evSpAtk = 0;
  let evSpDefe = 0;
  let evSpd = 0;

  for (let i = 0; i < lvl; i++) {
    let num = randomizeNum(6);
    if (num === 1) {
      evHp++;
    } else if (num === 2) {
      evAtk++;
    } else if (num === 3) {
      evDefe++;
    } else if (num === 4) {
      evSpAtk++;
    } else if (num === 5) {
      evSpDefe++;
    } else if (num === 6) {
      evSpd++;
    } else {
      console.log('error')
    }
  };

  pokemonObj.evHp = evHp;
  pokemonObj.evAtk = evAtk;
  pokemonObj.evDefe = evDefe;
  pokemonObj.evSpAtk = evSpAtk;
  pokemonObj.evSpDefe = evSpDefe;
  pokemonObj.evSpd = evSpd;

  return generateNature(pokemonObj);
};

function divideBy10(level, advantage) {
  if (advantage) {
    return 2 + (Math.floor(level / 10) * 2);    
  } else {
    return (1 + Math.floor(level / 10)) * (-1)
  }
}

function calcNature(pokemonObj) {
  pokemonObj.natHp = 0;
  pokemonObj.natAtk = 0;
  pokemonObj.natDefe = 0;
  pokemonObj.natSpAtk = 0;
  pokemonObj.natSpDefe = 0;
  pokemonObj.natSpd = 0;

  let level = pokemonObj.level;
  let advantage = pokemonObj.nature.adv;
  let disadvantage = pokemonObj.nature.disAdv;

  // Advantage
  if (pokemonObj.nature.adv === 'atk') {
    pokemonObj.natAtk = divideBy10(level, advantage);

  } else if (pokemonObj.nature.adv === 'defe') {
    pokemonObj.natDefe = divideBy10(level, advantage);

  } else if (pokemonObj.nature.adv === 'spAtk') {
    pokemonObj.natSpAtk = divideBy10(level, advantage);

  } else if (pokemonObj.nature.adv === 'spDefe') {
    pokemonObj.natSpDefe = divideBy10(level, advantage); 

  } else if (pokemonObj.nature.adv === 'spd') {
    pokemonObj.natSpd = divideBy10(level, advantage); 

  } else if (pokemonObj.nature.adv === 'hp') {
    pokemonObj.natHp = divideBy10(level, advantage); 
  } else {
    return "error";
  }

  // Disadvantage

  if (pokemonObj.nature.disAdv === 'atk') {
    pokemonObj.natAtk = divideBy10(level); 

  } else if (pokemonObj.nature.disAdv === 'defe') {
    pokemonObj.natDefe = divideBy10(level); 

  } else if (pokemonObj.nature.disAdv === 'spAtk') {
    pokemonObj.natSpAtk = divideBy10(level);

  } else if (pokemonObj.nature.disAdv === 'spDefe') {
    pokemonObj.natSpDefe = divideBy10(level); 

  } else if (pokemonObj.nature.disAdv === 'spd') {
    pokemonObj.natSpd = divideBy10(level); 

  } else if (pokemonObj.nature.disAdv === 'hp') {
    pokemonObj.natHp = divideBy10(level);
  } else {
    return "error";
  }
  return pokemonObj;
}

function generateNature(pokemonObj) {
  const nature = randomizeNum(20);

  if (nature === 1) {
    pokemonObj.nature = {
      name: "lonely",
      adv: "atk",
      disAdv: "defe"
    };
  } else if (nature === 2) {
    pokemonObj.nature = {
      name: "brave",
      adv: "atk",
      disAdv: "spd"
    };
  } else if (nature === 3) {
    pokemonObj.nature = {
      name: "adament",
      adv: "atk",
      disAdv: "spAtk"
    };
  } else if (nature === 4) {
    pokemonObj.nature = {
      name: "naughty",
      adv: "atk",
      disAdv: "spDefe"
    };
  } else if (nature === 5) {
    pokemonObj.nature = {
      name: "bold",
      adv: "defe",
      disAdv: "atk"
    };
  } else if (nature === 6) {
    pokemonObj.nature = {
      name: "relaxed",
      adv: "defe",
      disAdv: "spd"
    };
  } else if (nature === 7) {
    pokemonObj.nature = {
      name: "impish",
      adv: "defe",
      disAdv: "spAtk"
    };
  } else if (nature === 8) {
    pokemonObj.nature = {
      name: "lax",
      adv: "defe",
      disAdv: "spDef"
    };
  } else if (nature === 9) {
    pokemonObj.nature = {
      name: "timid",
      adv: "spd",
      disAdv: "atk"
    };
  } else if (nature === 10) {
    pokemonObj.nature = {
      name: "hasty",
      adv: "spd",
      disAdv: "defe"
    };
  } else if (nature === 11) {
    pokemonObj.nature = {
      name: "jolly",
      adv: "spd",
      disAdv: "spAtk"
    };
  } else if (nature === 12) {
    pokemonObj.nature = {
      name: "naive",
      adv: "spd",
      disAdv: "spDefe"
    };
  } else if (nature === 13) {
    pokemonObj.nature = {
      name: "modest",
      adv: "spAtk",
      disAdv: "atk"
    };
  } else if (nature === 14) {
    pokemonObj.nature = {
      name: "mild",
      adv: "spAtk",
      disAdv: "defe"
    };
  } else if (nature === 15) {
    pokemonObj.nature = {
      name: "quiet",
      adv: "spAtk",
      disAdv: "spd"
    };
  } else if (nature === 16) {
    pokemonObj.nature = {
      name: "rash",
      adv: "spAtk",
      disAdv: "spDefe"
    };
  } else if (nature === 17) {
    pokemonObj.nature = {
      name: "calm",
      adv: "spDefe",
      disAdv: "atk"
    };
  } else if (nature === 18) {
    pokemonObj.nature = {
      name: "gentle",
      adv: "spDefe",
      disAdv: "defe"
    };
  } else if (nature === 19) {
    pokemonObj.nature = {
      name: "sassy",
      adv: "spDefe",
      disAdv: "spd"
    };
  } else if (nature === 20) {
    pokemonObj.nature = {
      name: "careful",
      adv: "spDefe",
      disAdv: "spAtk"
    };
  } else {
    return "error";
  }
  return calculateAffinity(calcNature(pokemonObj));
};

// utility function

function getAffinityCalc(stat, level) {
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
    return "error";
  }
}

function calculateAffinity(pokemonObj) {
  const { level, baseHp, baseAtk, baseDefe, baseSpAtk, baseSpDefe, baseSpd } = pokemonObj;

  pokemonObj.affHp = getAffinityCalc(baseHp, level);
  pokemonObj.affAtk = getAffinityCalc(baseAtk, level);
  pokemonObj.affDefe = getAffinityCalc(baseDefe, level);
  pokemonObj.affSpAtk = getAffinityCalc(baseSpAtk, level);
  pokemonObj.affSpDefe = getAffinityCalc(baseSpDefe, level);
  pokemonObj.affSpd = getAffinityCalc(baseSpd, level);
  
  return getTotal(pokemonObj);
};

function getTotal(pokemonObj) {

  const { baseHp, baseAtk, baseDefe, baseSpAtk, baseSpDefe, baseSpd } = pokemonObj;
  const { evHp, evAtk, evDefe, evSpAtk, evSpDefe, evSpd } = pokemonObj;
  const { affHp, affAtk, affDefe, affSpAtk, affSpDefe, affSpd } = pokemonObj;
  const { natHp, natAtk, natDefe, natSpAtk, natSpDefe, natSpd } = pokemonObj;
  
  const totalHp = baseHp + evHp + affHp + natHp;
  const totalAtk = baseAtk + evAtk + affAtk + natAtk;
  const totalDefe = baseDefe + evDefe + affDefe + natDefe;
  const totalSpAtk = baseSpAtk + evSpAtk + affSpAtk + natSpAtk;
  const totalSpDefe = baseSpDefe + evSpDefe + affSpDefe + natSpDefe;
  const totalSpd = baseSpd + evSpd + affSpd + natSpd;
  
  pokemonObj.totalHp = totalHp;
  pokemonObj.totalAtk = totalAtk;
  pokemonObj.totalDefe = totalDefe;
  pokemonObj.totalSpAtk = totalSpAtk;
  pokemonObj.totalSpDefe = totalSpDefe;
  pokemonObj.totalSpd = totalSpd;

  return pokemonObj;

};

// run script: node pokemon_gen_calculator.js flaff 10 10 10 10 10 10 10 
console.log(ask_user_return_pkmnObj(user_input));


