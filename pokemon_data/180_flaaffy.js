module.exports = {
  name: 'flaaffy',
  pokedex: 180,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'mareep', level: 0, condition: false },
      {  evolutionStep: 2, form: 'flaaffy', level: 15, condition: false },
      {  evolutionStep: 3, form: 'ampharos', level: 30, condition: false },      
    ]
  },
  stats: {
    hp: 70,
    atk: 55,
    def: 55,
    spAtk: 80,
    spDef: 60,
    spd: 45,
  },
  type: ['electric'],
  catchRate: 15.7,
  experienceYield: 128,
  genderRatio: [50, 50],
  evYield: [
    { type: 'spAtk', value: 2 }
  ],
  abilities: [
    {name: 'static', hidden: false },
    {name: 'plus', hidden: true }
  ],
  height: 0.8,
  weight: 13.3,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'thunder wave', level: 1 },
    { name: 'thunder shock', level: 1 },
    { name: 'thunder wave', level: 4 },
    { name: 'thunder shock', level: 8 },
    { name: 'cotton spore', level: 11 },
    { name: 'charge', level: 16 },
    { name: 'take down', level: 20 },
    { name: 'electro ball', level: 25 },
    { name: 'confuse ray', level: 29 },
    { name: 'power gem', level: 34 },
    { name: 'discharge', level: 38 },
    { name: 'cotton guard', level: 43 },
    { name: 'signal beam', level: 47 },
    { name: 'light screen', level: 52 },
    { name: 'thunder', level: 56 },
  ],
};
