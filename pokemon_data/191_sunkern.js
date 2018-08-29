module.exports = {
  name: 'sunkern',
  pokedex: 191,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'sunkern', level: 0, condition: false },
      {  evolutionStep: 2, form: 'sunflora', level: false, condition: 'sun stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 30,
    atk: 30,
    def: 30,
    spAtk: 30,
    spDef: 30,
    spd: 30,
  },
  type: ['grass'],
  catchRate: 30.7,
  experienceYield: 36,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spAtk', value: 1 },
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'solar power', hidden: false },
    {name: 'early bird', hidden: true }
  ],
  height: 0.3,
  weight: 1.8,
  moves: [
    { name: 'absorb', level: 1 },
    { name: 'growth', level: 1 },
    { name: 'ingrain', level: 4 },
    { name: 'grass whistle', level: 7 },
    { name: 'mega drain', level: 10 },
    { name: 'leech seed', level: 13 },
    { name: 'razor leaf', level: 16 },
    { name: 'worry seed', level: 19 },
    { name: 'giga drain', level: 22 },
    { name: 'endeavor', level: 25 },
    { name: 'synthesis', level: 28 },
    { name: 'natural gift', level: 31 },
    { name: 'solar beam', level: 34 },
    { name: 'double-edge', level: 37 },
    { name: 'sunny day', level: 40 },
    { name: 'seed bomb', level: 43 },
  ],
};