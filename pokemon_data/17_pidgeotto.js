module.exports = {
  name: 'pidgeotto',
  pokedex: 17,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'pidgey', level: 0, condition: false },
      {  evolutionStep: 2, form: 'pidgeotto', level: 18, condition: false },
      {  evolutionStep: 3, form: 'pidgeot', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 63,
    atk: 60,
    def: 55,
    spAtk: 50,
    spDef: 50,
    spd: 71,
  },
  type: ['normal', 'flying'],
  catchRate: 15.7,
  experienceYield: 122,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 },
  ],
  abilities: [
    {name: 'keen eye', hidden: false },
    {name: 'tangled feet', hidden: false },
    {name: 'big pecks', hidden: true },
  ],
  height: 1.1,
  weight: 30.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'sand attack', level: 1 },
    { name: 'gust', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'gust', level: 9 },
    { name: 'quick attack', level: 13 },
    { name: 'whirlwind', level: 17 },
    { name: 'twister', level: 22 },
    { name: 'feather dance', level: 27 },
    { name: 'agility', level: 32 },
    { name: 'wing attack', level: 37 },
    { name: 'roost', level: 42 },
    { name: 'tailwind', level: 47 },
    { name: 'mirror move', level: 52 },
    { name: 'air slash', level: 57 },
    { name: 'hurricane', level: 52 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};