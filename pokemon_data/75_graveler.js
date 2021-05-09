module.exports = {
  name: 'graveler',
  pokedex: 75,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'geodude', level: 0, condition: false },
      {  evolutionStep: 2, form: 'graveler', level: 25, condition: false },
      {  evolutionStep: 3, form: 'golem', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: 'alolan' },  
  stats: {
    hp: 55,
    atk: 95,
    def: 115,
    spAtk: 45,
    spDef: 45,
    spd: 35,
  },
  type: ['rock', 'ground'],
  catchRate: 15.7,
  experienceYield: 137,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 }
  ],
  abilities: [
    {name: 'rock head', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'sand veil', hidden: true }
  ],
  height: 1.0,
  weight: 105.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'defence curl', level: 1 },
    { name: 'mud sport', level: 1 },
    { name: 'rock polish', level: 1 },
    { name: 'mud sport', level: 4 },
    { name: 'rock polish', level: 6 },
    { name: 'rollout', level: 10 },
    { name: 'magnitude', level: 12 },
    { name: 'rock throw', level: 16 },
    { name: 'smack down', level: 18 },
    { name: 'bulldoze', level: 22 },
    { name: 'self-destruct', level: 24 },
    { name: 'stealth rock', level: 30 },
    { name: 'rock blast', level: 34 },
    { name: 'earthquake', level: 40 },
    { name: 'explosion', level: 44 },
    { name: 'double-edge', level: 50 },
    { name: 'stone edge', level: 54 },
  ],
  wild_items: {
    common: [],
    rare: ['everstone', 'hard_stone', 'alolan_cell_battery'],
    guarantee: []
  }
};
