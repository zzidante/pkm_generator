module.exports = {
  name: 'primeape',
  pokedex: 57,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'mankey', level: 0, condition: false },
      {  evolutionStep: 2, form: 'primeape', level: 28, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 65,
    atk: 105,
    def: 60,
    spAtk: 60,
    spDef: 70,
    spd: 95,
  },
  type: ['fighting'],
  catchRate: 9.8,
  experienceYield: 159,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'vital spirit', hidden: false },
    {name: 'anger point', hidden: false },
    {name: 'defiant', hidden: true }
  ],
  height: 1.0,
  weight: 32.0,
  moves: [
    { name: 'rage', level: 1 },
    { name: 'final gambit', level: 1 },
    { name: 'fling', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'low kick', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'rage', level: -1 },
    { name: 'fury swipes', level: 5 },
    { name: 'karate chop', level: 8 },
    { name: 'pursuit', level: 12 },
    { name: 'seismic toss', level: 15 },
    { name: 'swagger', level: 19 },
    { name: 'cross chop', level: 22 },
    { name: 'assurance', level: 26 },
    { name: 'punishment', level: 30 },
    { name: 'thrash', level: 35 },
    { name: 'close combat', level: 39 },
    { name: 'screech', level: 44 },
    { name: 'stomping tantrum', level: 48 },
    { name: 'outrage', level: 53 },
    { name: 'final gambit', level: 57 },
  ],
  wild_items: {
    common: [],
    rare: ['payapa_berry'],
    guarantee: []
  }
};
