module.exports = {
  name: 'nidorina',
  pokedex: 30,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran f', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorina', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoqueen', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 70,
    atk: 62,
    def: 67,
    spAtk: 55,
    spDef: 55,
    spd: 56,
  },
  type: ['poison'],
  catchRate: 15.7,
  experienceYield: 128,
  genderRatio: [{m: 0}, {f: 100}],
  evYield: [
    { type: 'hp', value: 2 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.8,
  weight: 20.0,
  moves: [
    { name: 'growl', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 7 },
    { name: 'double kick', level: 9 },
    { name: 'poison sting', level: 13 },
    { name: 'fury swipes', level: 20 },
    { name: 'bite', level: 23 },
    { name: 'helping hand', level: 28 },
    { name: 'toxic spikes', level: 35 },
    { name: 'flatter', level: 38 },
    { name: 'crunch', level: 43 },
    { name: 'captivate', level: 50 },
    { name: 'poison fang', level: 58 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};
