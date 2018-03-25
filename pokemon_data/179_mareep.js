module.exports = {
  name: 'mareep',
  pokedex: 179,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    totalEvolutionStats: 3,
    details: [
      { evolutionStep: 1, form: 'mareep', level: false, condition: false },
      { evolutionStep: 2, form: 'flaaffy', level: 15, condition: false },
      { evolutionStep: 3, form: 'ampharos', level: 30, condition: false },
    ]
  },
  stats: {
    hp: 55,
    atk: 40,
    def: 40,
    spAtk: 65,
    spDef: 45,
    spd: 35,
  },
  type: ['electric'],
  catchRate: 30.7,
  experienceYield: 56,
  genderRatio: [50, 50],
  evYield: [
    { type: 'spAtk', value: 1 }
  ],
  abilities: [
    { name: 'static', hidden: false },
    { name: 'plus', hidden: true }
  ],
  height: 0.6,
  weight: 7.8,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'thunder wave', level: 4 },
    { name: 'thunder shock', level: 8 },
    { name: 'cotton spore', level: 11 },
    { name: 'charge', level: 15 },
    { name: 'take down', level: 18 },
    { name: 'electro ball', level: 22 },
    { name: 'confuse ray', level: 25 },
    { name: 'power gem', level: 29 },
    { name: 'discharge', level: 32 },
    { name: 'cotton guard', level: 36 },
    { name: 'signal beam', level: 39 },
    { name: 'light screen', level: 43 },
    { name: 'thunder', level: 46 },
  ],
};
