module.exports = {
  name: 'unown',
  pokedex: 201,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'unown', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 48,
    atk: 72,
    def: 48,
    spAtk: 72,
    spDef: 48,
    spd: 48,
  },
  type: ['psychic'],
  catchRate: 29.4,
  experienceYield: 118,
  genderRatio: [false],
  evYield: [
    { type: 'spAtk', value: 1 },
  ],
  abilities: [
    {name: 'levitate', hidden: false },
  ],
  height: 0.5,
  weight: 5.0,
  moves: [
    { name: 'hidden power', level: 1 },
  ],
};