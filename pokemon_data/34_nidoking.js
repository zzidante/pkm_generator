module.exports = {
  name: 'nidoking',
  pokedex: 34,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'nidoran m', level: 0, condition: false },
      {  evolutionStep: 2, form: 'nidorino', level: 16, condition: false },
      {  evolutionStep: 3, form: 'nidoking', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 81,
    atk: 102,
    def: 77,
    spAtk: 85,
    spDef: 75,
    spd: 85,
  },
  type: ['poison', 'ground'],
  catchRate: 5.9,
  experienceYield: 227,
  genderRatio: [{m: 100}, {f: 0}],
  evYield: [
    { type: 'atk', value: 3 }
  ],
  abilities: [
    {name: 'poison point', hidden: false },
    {name: 'rivalry', hidden: false },
    {name: 'sheer force', hidden: true }
  ],
  height: 1.4,
  weight: 62.0,
  moves: [
    { name: 'megahorn', level: 1 },
    { name: 'peck', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'double kick', level: 1 },
    { name: 'poison sting', level: 1 },
    { name: 'poison sting', level: 13 },
    { name: 'chip away', level: 23 },
    { name: 'thrash', level: 35 },
    { name: 'earth power', level: 43 },
    { name: 'megahorn', level: 58 },
  ],
};
