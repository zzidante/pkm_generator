module.exports = {
  name: 'nidoran m',
  pokedex: 32,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran m', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorino', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoking', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 46,
    atk: 57,
    def: 40,
    spAtk: 40,
    spDef: 40,
    spd: 50,
  },
  type: ['poison'],
  catchRate: 30.7,
  experienceYield: 55,
  genderRatio: [{m: 100}, {f: 0}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.5,
  weight: 9.0,
  moves: [
    { name: 'leer', level: 1 },
    { name: 'peck', level: 1 },
    { name: 'focus energy', level: 7 },
    { name: 'double kick', level: 9 },
    { name: 'poison sting', level: 13 },
    { name: 'fury swipes', level: 19 },
    { name: 'horn attack', level: 21 },
    { name: 'helping hand', level: 25 },
    { name: 'toxic spikes', level: 31 },
    { name: 'flatter', level: 33 },
    { name: 'poison jab', level: 37 },
    { name: 'captivate', level: 43 },
    { name: 'horn drill', level: 45 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};
