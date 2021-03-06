module.exports = {
  name: 'pidgey',
  pokedex: 16,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'pidgey', level: 0, condition: false },
      {  evolutionStep: 2, form: 'pidgeotto', level: 18, condition: false },
      {  evolutionStep: 3, form: 'pidgeot', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 40,
    atk: 45,
    def: 40,
    spAtk: 35,
    spDef: 35,
    spd: 56,
  },
  type: ['normal', 'flying'],
  catchRate: 33.3,
  experienceYield: 39,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'keen eye', hidden: false },
    {name: 'tangled feet', hidden: false },
    {name: 'big pecks', hidden: true },
  ],
  height: 0.3,
  weight: 1.8,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'gust', level: 9 },
    { name: 'quick attack', level: 13 },
    { name: 'whirlwind', level: 17 },
    { name: 'twister', level: 21 },
    { name: 'feather dance', level: 25 },
    { name: 'agility', level: 29 },
    { name: 'wing attack', level: 33 },
    { name: 'roost', level: 37 },
    { name: 'tailwind', level: 41 },
    { name: 'mirror move', level: 45 },
    { name: 'air slash', level: 49 },
    { name: 'hurricane', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};