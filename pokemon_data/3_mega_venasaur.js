module.exports = {
  name: 'mega_venusaur',
  pokedex: 3,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bulbasaur', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ivysaur', level: 16, condition: false },
      {  evolutionStep: 3, form: 'venusaur', level: 32, condition: false },
    ]
  },
  variant: 'standard',
  stats: {
    hp: 80,
    atk: 100,
    def: 123,
    spAtk: 122,
    spDef: 120,
    spd: 80,
  },
  type: ['grass', 'poison'],
  catchRate: 5.9,
  experienceYield: 281,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'thick fat', hidden: false },
  ],
  height: 2.4,
  weight: 155.5,
  moves: [
    { name: 'petal dance', level: -1 },
    { name: 'petal dance', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'leech seed', level: 1 },
    { name: 'vine whip', level: 1 },
    { name: 'growl', level: 3 },
    { name: 'leech seed', level: 7 },
    { name: 'vine whip', level: 9 },
    { name: 'poison powder', level: 13 },
    { name: 'sleep powder', level: 13 },
    { name: 'take down', level: 15 },
    { name: 'razor leaf', level: 20 },
    { name: 'sweet scent', level: 23 },
    { name: 'growth', level: 28 },
    { name: 'double-edge', level: 31 },
    { name: 'worry seed', level: 39 },
    { name: 'synthesis', level: 45 },
    { name: 'petal blizzard', level: 50 },
    { name: 'solar beam', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};