module.exports = {
  name: 'mega_pidgeot',
  pokedex: 18,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'pidgey', level: 0, condition: false },
      {  evolutionStep: 2, form: 'pidgeotto', level: 18, condition: false },
      {  evolutionStep: 3, form: 'pidgeot', level: 36, condition: false },
    ]
  },
  variant: 'standard',
  stats: {
    hp: 83,
    atk: 80,
    def: 80,
    spAtk: 135,
    spDef: 80,
    spd: 121,
  },
  type: ['normal', 'flying'],
  catchRate: 5.9,
  experienceYield: 261,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 3 },
  ],
  abilities: [
    {name: 'no guard', hidden: false },
  ],
  height: 2.2,
  weight: 50.5,
  moves: [
    { name: 'hurricane', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'sand attack', level: 1 },
    { name: 'gust', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'gust', level: 9 },
    { name: 'quick attack', level: 13 },
    { name: 'whirlwind', level: 17 },
    { name: 'twister', level: 22 },
    { name: 'feather dance', level: 27 },
    { name: 'agility', level: 32 },
    { name: 'wing attack', level: 38 },
    { name: 'roost', level: 44 },
    { name: 'tailwind', level: 50 },
    { name: 'mirror move', level: 56 },
    { name: 'air slash', level: 62 },
    { name: 'hurricane', level: 68 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};