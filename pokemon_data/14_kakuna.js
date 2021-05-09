module.exports = {
  name: 'kakuna',
  pokedex: 14,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'weedle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kakuna', level: 7, condition: false },
      {  evolutionStep: 3, form: 'beedrill', level: 10, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 45,
    atk: 25,
    def: 50,
    spAtk: 25,
    spDef: 25,
    spd: 35,
  },
  type: ['bug', 'poison'],
  catchRate: 15.7,
  experienceYield: 72,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 },
  ],
  abilities: [
    {name: 'shed skin', hidden: false },
  ],
  height: 0.6,
  weight: 10.0,
  moves: [
    { name: 'harden', level: -1 },
    { name: 'harden', level: 1 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};