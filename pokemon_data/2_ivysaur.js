module.exports = {
  name: 'ivysaur',
  pokedex: 2,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bulbasaur', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ivysaur', level: 16, condition: false },
      {  evolutionStep: 3, form: 'venusaur', level: 32, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 60,
    atk: 62,
    def: 63,
    spAtk: 80,
    spDef: 80,
    spd: 60,
  },
  type: ['grass', 'poison'],
  catchRate: 5.9,
  experienceYield: 142,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'overgrow', hidden: false },
    {name: 'chlorophyll', hidden: true },
  ],
  height: 1.0,
  weight: 13.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'leech seed', level: 1 },
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
    { name: 'worry seed', level: 36 },
    { name: 'synthesis', level: 39 },
    { name: 'solar beam', level: 44 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};