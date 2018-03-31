module.exports = {
  name: 'nidoran f',
  pokedex: 29,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran f', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorina', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoqueen', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 55,
    atk: 47,
    def: 52,
    spAtk: 40,
    spDef: 40,
    spd: 41,
  },
  type: ['poison'],
  catchRate: 30.7,
  experienceYield: 55,
  genderRatio: [{m: 0}, {f: 100}],
  evYield: [
    { type: 'hp', value: 1 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.4,
  weight: 7.0,
  moves: [
    { name: 'growl', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 7 },
    { name: 'double kick', level: 9 },
    { name: 'poison sting', level: 13 },
    { name: 'fury swipes', level: 19 },
    { name: 'bite', level: 21 },
    { name: 'helping hand', level: 25 },
    { name: 'toxic spikes', level: 31 },
    { name: 'flatter', level: 33 },
    { name: 'crunch', level: 37 },
    { name: 'captivate', level: 43 },
    { name: 'poison fang', level: 45 },
  ],
};
