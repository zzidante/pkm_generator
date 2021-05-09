module.exports = {
  name: 'blastoise',
  pokedex: 9,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'squirtle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'wartortle', level: 16, condition: false },
      {  evolutionStep: 3, form: 'blastoise', level: 36, condition: false },
    ]
  },
  variant: 'mega',
  stats: {
    hp: 79,
    atk: 83,
    def: 100,
    spAtk: 85,
    spDef: 105,
    spd: 78,
  },
  type: ['water'],
  catchRate: 5.9,
  experienceYield: 239,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spDef', value: 3 },
  ],
  abilities: [
    {name: 'torrent', hidden: false },
    {name: 'rain dish', hidden: true },
  ],
  height: 1.6,
  weight: 85.5,
  moves: [
    { name: 'flash cannon', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'withdraw', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'water gun', level: 7 },
    { name: 'withdraw', level: 10 },
    { name: 'bubble', level: 13 },
    { name: 'bite', level: 17 },
    { name: 'rapid spin', level: 21 },
    { name: 'protect', level: 25 },
    { name: 'water pulse', level: 29 },
    { name: 'aqua tail', level: 33 },
    { name: 'skull bash', level: 40 },
    { name: 'iron defense', level: 47 },
    { name: 'rain dance', level: 54 },
    { name: 'hydro pump', level: 60 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};