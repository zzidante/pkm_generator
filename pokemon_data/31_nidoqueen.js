module.exports = {
  name: 'nidoqueen',
  pokedex: 31,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran f', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorina', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoqueen', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 90,
    atk: 92,
    def: 87,
    spAtk: 75,
    spDef: 85,
    spd: 76,
  },
  type: ['poison', 'ground'],
  catchRate: 5.9,
  experienceYield: 227,
  genderRatio: [{m: 0}, {f: 100}],
  evYield: [
    { type: 'hp', value: 3 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'sheer force', hidden: true }
  ],
  height: 1.3,
  weight: 60.0,
  moves: [
    { name: 'superpower', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'double kick', level: 1 },
    { name: 'poison sting', level: 1 },
    { name: 'chip away', level: 23 },
    { name: 'body slam', level: 35 },
    { name: 'earth power', level: 43 },
    { name: 'superpower', level: 58 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};
