module.exports = {
  name: 'abra',
  pokedex: 63,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'abra', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kadabra', level: 16, condition: false },
      {  evolutionStep: 3, form: 'alakazam', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 25,
    atk: 20,
    def: 15,
    spAtk: 105,
    spDef: 55,
    spd: 90,
  },
  type: ['psychic'],
  catchRate: 26.1,
  experienceYield: 62,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'spatk', value: 1 }
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
    {name: 'inner focus', hidden: false },
    {name: 'magic guard', hidden: true }
  ],
  height: 0.9,
  weight: 19.5,
  moves: [
    { name: 'teleport', level: 1 },
  ],
  wild_items: {
    common: [],
    rare: ['twisted_spoon'],
    guarantee: []
  }
};
