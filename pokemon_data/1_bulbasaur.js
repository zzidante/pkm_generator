module.exports = {
  name: 'bulbasaur',
  pokedex: 1,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bulbasaur', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ivysaur', level: 16, condition: false },
      {  evolutionStep: 3, form: 'venusaur', level: 32, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 45,
    atk: 49,
    def: 49,
    spAtk: 65,
    spDef: 65,
    spd: 45,
  },
  type: ['grass', 'poison'],
  catchRate: 5.9,
  experienceYield: 64,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 1 },
  ],
  abilities: [
    {name: 'overgrow', hidden: false },
    {name: 'chlorophyll', hidden: true },
  ],
  height: 0.7,
  weight: 6.9,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 3 },
    { name: 'leech seed', level: 7 },
    { name: 'vine whip', level: 9 },
    { name: 'poison powder', level: 13 },
    { name: 'sleep powder', level: 13 },
    { name: 'take down', level: 15 },
    { name: 'razor leaf', level: 19 },
    { name: 'sweet scent', level: 21 },
    { name: 'growth', level: 25 },
    { name: 'double-edge', level: 27 },
    { name: 'worry seed', level: 31 },
    { name: 'synthesis', level: 33 },
    { name: 'seed bomb', level: 37 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};