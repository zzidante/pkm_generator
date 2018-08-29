module.exports = {
  name: 'delibird',
  pokedex: 225,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'delibird', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 45,
    atk: 55,
    def: 45,
    spAtk: 65,
    spDef: 45,
    spd: 75,
  },
  type: ['ice', 'flying'],
  catchRate: 5.9,
  experienceYield: 116,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'vital spirit', hidden: false },
    {name: 'hustle', hidden: false },
    {name: 'insomnia', hidden: true },
  ],
  height: 0.9,
  weight: 16.0,
  moves: [
    { name: 'present', level: 1 },
    { name: 'drill peck', level: 25 },
  ],
};