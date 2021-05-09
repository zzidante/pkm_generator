module.exports = {
  name: 'charmander',
  pokedex: 4,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'charmander', level: 0, condition: false },
      {  evolutionStep: 2, form: 'charmeleon', level: 16, condition: false },
      {  evolutionStep: 3, form: 'charizard', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 39,
    atk: 52,
    def: 43,
    spAtk: 60,
    spDef: 50,
    spd: 65,
  },
  type: ['fire'],
  catchRate: 5.9,
  experienceYield: 62,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'blaze', hidden: false },
    {name: 'solar power', hidden: true },
  ],
  height: 0.6,
  weight: 8.5,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'ember', level: 7 },
    { name: 'smokescreen', level: 10 },
    { name: 'dragon rage', level: 16 },
    { name: 'scary face', level: 19 },
    { name: 'fire fang', level: 25 },
    { name: 'flame burst', level: 28 },
    { name: 'slash', level: 34 },
    { name: 'flamethrower', level: 37 },
    { name: 'fire spin', level: 43 },
    { name: 'inferno', level: 46 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};