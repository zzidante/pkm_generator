module.exports = {
  name: 'mankey',
  pokedex: 56,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'mankey', level: 0, condition: false },
      {  evolutionStep: 2, form: 'primeape', level: 28, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 40,
    atk: 80,
    def: 35,
    spAtk: 35,
    spDef: 45,
    spd: 70,
  },
  type: ['fighting'],
  catchRate: 24.8,
  experienceYield: 61,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'vital spirit', hidden: false },
    {name: 'anger point', hidden: false },
    {name: 'defiant', hidden: true }
  ],
  height: 0.5,
  weight: 28.0,
  moves: [
    { name: 'covet', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'low kick', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'fury swipes', level: 5 },
    { name: 'karate chop', level: 8 },
    { name: 'pursuit', level: 12 },
    { name: 'seismic toss', level: 15 },
    { name: 'swagger', level: 19 },
    { name: 'cross chop', level: 22 },
    { name: 'assurance', level: 26 },
    { name: 'punishment', level: 29 },
    { name: 'thrash', level: 33 },
    { name: 'close combat', level: 36 },
    { name: 'screech', level: 40 },
    { name: 'stomping tantrum', level: 43 },
    { name: 'outrage', level: 47 },
    { name: 'final gambit', level: 50 },
  ],
};
