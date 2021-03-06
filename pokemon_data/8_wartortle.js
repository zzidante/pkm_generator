module.exports = {
  name: 'wartortle',
  pokedex: 8,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'squirtle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'wartortle', level: 16, condition: false },
      {  evolutionStep: 3, form: 'blastoise', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 59,
    atk: 63,
    def: 80,
    spAtk: 65,
    spDef: 80,
    spd: 58,
  },
  type: ['water'],
  catchRate: 5.9,
  experienceYield: 142,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'def', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'torrent', hidden: false },
    {name: 'rain dish', hidden: true },
  ],
  height: 1.0,
  weight: 22.5,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'water gun', level: 7 },
    { name: 'withdraw', level: 10 },
    { name: 'bubble', level: 13 },
    { name: 'bite', level: 17 },
    { name: 'rapid spin', level: 21 },
    { name: 'protect', level: 25 },
    { name: 'water pulse', level: 29 },
    { name: 'aqua tail', level: 33 },
    { name: 'skull bash', level: 37 },
    { name: 'iron defense', level: 41 },
    { name: 'rain dance', level: 45 },
    { name: 'hydro pump', level: 49 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};