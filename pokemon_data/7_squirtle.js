module.exports = {
  name: 'squirtle',
  pokedex: 7,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'squirtle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'wartortle', level: 16, condition: false },
      {  evolutionStep: 3, form: 'blastoise', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 44,
    atk: 48,
    def: 65,
    spAtk: 50,
    spDef: 64,
    spd: 43,
  },
  type: ['water'],
  catchRate: 5.9,
  experienceYield: 63,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'def', value: 1 },
  ],
  abilities: [
    {name: 'torrent', hidden: false },
    {name: 'rain dish', hidden: true },
  ],
  height: 0.5,
  weight: 9.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'water gun', level: 7 },
    { name: 'withdraw', level: 10 },
    { name: 'bite', level: 16 },
    { name: 'rapid spin', level: 19 },
    { name: 'protect', level: 19 },
    { name: 'water pulse', level: 25 },
    { name: 'aqua tail', level: 28 },
    { name: 'skull bash', level: 31 },
    { name: 'iron defense', level: 34 },
    { name: 'rain dance', level: 37 },
    { name: 'hydro pump', level: 40 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};