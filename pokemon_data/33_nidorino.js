module.exports = {
  name: 'nidorino',
  pokedex: 33,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran m', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorino', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoking', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 61,
    atk: 72,
    def: 57,
    spAtk: 55,
    spDef: 55,
    spd: 65,
  },
  type: ['poison'],
  catchRate: 15.7,
  experienceYield: 128,
  genderRatio: [{m: 100}, {f: 0}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.9,
  weight: 19.5,
  moves: [
    { name: 'leer', level: 1 },
    { name: 'peck', level: 1 },
    { name: 'focus energy', level: 7 },
    { name: 'double kick', level: 9 },
    { name: 'poison sting', level: 13 },
    { name: 'fury swipes', level: 20 },
    { name: 'horn attack', level: 23 },
    { name: 'helping hand', level: 28 },
    { name: 'toxic spikes', level: 35 },
    { name: 'flatter', level: 38 },
    { name: 'poison jab', level: 43 },
    { name: 'captivate', level: 50 },
    { name: 'horn drill', level: 58 },
  ],
};
