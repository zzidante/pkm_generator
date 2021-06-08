// ensure we have access to `process.env` as set in .env
// (can be removed when we globally init this in the index.js file when
// we put together a server)
require('dotenv').config();

const fs = require('fs');
var merge = require('lodash.merge');
var cloneDeep = require('lodash.clonedeep');
const logger = require('../../helpers/logger');

const convertRawData = function (pokemonName) {
  // loop through files & find unprocessed ones (by name & version if updateVersion is set)
  // for each unprocessed file
  function convertStatNames (externalName) {
    const mapping = {
      'hp': 'hp',
      'attack': 'atk',
      'defense': 'def',
      'special-attack': 'spAtk',
      'special-defense': 'spDef',
      'speed': 'spd',
    };

    const name = mapping[externalName];

    if (name) {
      return name;
    } else {
      throw 'Unsupported Stat Name Mapping';
    }
  }

  function parseStats(stats) {
    const evYield = [];

    statsMap = stats.map((v, _i) => {
      const statName = convertStatNames(v.stat.name);
      if (v.effort > 0) {
        evYield.push({ type: statName, value: v.effort });
      }

      return { [statName]: v.base_stat };
    });

    return [statsMap, evYield];
  }

  function parseAbilities(abilities) {
    return abilities.map((ability) => {
      return { name: ability.ability.name.replace(/-/g, " "), hidden: ability.is_hidden };
    });
  }

  function convertHeldItemRarity (items) {
    // I have chosen to allow ALL supported versions items to be picked from
    // this does however mean that any items with multiple versions of rarity
    // must be defaulted to something.
    // In this case I've chose the highest of the values.
    const commonItems = [];
    const rareItems = [];
    const guaranteeItems = [];

    items.forEach((item) => {
      const itemName = item.item.name;
      const highestRarity = item.version_details.reduce((acc, versionDetail) => {
        if (acc === null || versionDetail.rarity > acc) {
          return versionDetail.rarity;
        }
        return acc;
      }, null);

      if (highestRarity <= 5) {
        commonItems.push(itemName);
      }

      if (highestRarity > 5 && highestRarity <= 50) {
        rareItems.push(itemName);
      }

      if (highestRarity > 50) {
        guaranteeItems.push(itemName);
      }
    });

    return {
      common: commonItems,
      rare: rareItems,
      guarantee: guaranteeItems,
    };
  }

  function parseGender(ratio) {
    // -1 means genderless
    if (ratio < 0) {
      return [false]; // aka genderless
    } else {
      // this is how the API expresses the ratios, in eighths
      const percentMale = ratio / 8;
      const percentFemale = 100 - percentMale;
      return [ {m: percentMale}, {f: percentFemale} ];
    }

  }

  function parseMoves(moves) {
    let moveMap = {};
    moves.forEach((move) => {
      const moveName = move.move.name;
      let currentMax;

      move.version_group_details.forEach((detail) => {
        // some games will have different levels for different moves, or different moves altogether.
        // we allow for all moves across any level and also always choose the highest level is can be
        // learned at for a level up.
        if (detail.move_learn_method.name === 'level-up' && (!currentMax || detail.level_learned_at > currentMax)) {
          currentMax = detail.level_learned_at;
          moveMap[moveName] = detail.level_learned_at;
        }
      });

    });
    let formattedMoves = [];
    for (let [key, value] of Object.entries(moveMap)) {
      formattedMoves.push( { name: key, level: value } );
    }

    return formattedMoves;
  }

  fs.readFile(`${__dirname}/raw_responses/${pokemonName}_v${process.env.TABLETOP_CONVERTED_DATA_JSON_VERSION}.json`, 'utf8', function (err,data) {
    if (err) {
      logger({message: err});
      // we probably wanna throw here
      return;
    }
    const {
      fileName,
      version,
      datePulled,
      response: {
        pokemonByNameAPIResponse: {
          name,
          id: pokedex,
          height,
          weight,
          types,
          stats,
          moves,
          abilities,
          base_experience: baseExperience,
          held_items: heldItems,
          ...other
        },
        pokemonBySpeciesAPIResponse: {
          genderRate,
          captureRate,
        }
      }
    } = JSON.parse(data);

    const typeNames = types.map((v, _i) => v.type.name );
    const [statsObj, evYield] = parseStats(stats);

    const initObj = {
      name: null,
      pokedex: null,
      stats: {
        hp: null,
        atk: null,
        def: null,
        spAtk: null,
        spDef: null,
        spd: null,
      },
      type: [],
      catchRate: null,
      experienceYield: null,
      genderRatio: [],
      evYield: [
        { type: null, value: null }
      ],
      abilities: [
        { name: null, hidden: null },
      ],
      height: null,
      weight: null,
      moves: [
        { name: null, level: null },
      ],
      wild_items: {
        common: [],
        rare: [],
        guarantee: []
      }
    };

    const initCopy = cloneDeep(initObj);

    // mutation
    merge(
      initCopy,
      {
        name: name,
        pokedex: pokedex,
        abilities: parseAbilities(abilities),
        stats: statsObj,
        type: typeNames,
        catchRate: captureRate,
        experienceYield: baseExperience,
        genderRatio: parseGender(parseInt(genderRate)),
        height: height,
        weight: weight,
        moves: parseMoves(moves),
        evYield: evYield,
        wild_items: convertHeldItemRarity(heldItems),
      }
    );
      console.log(initCopy);
  });
};

module.exports = {
  interface: convertRawData,
};
