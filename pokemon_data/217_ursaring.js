module.exports = {
  name: 'ursaring',
  pokedex: 217,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'teddiursa', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ursaring', level: 30, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 90,
    atk: 130,
    def: 75,
    spAtk: 75,
    spDef: 75,
    spd: 55,
  },
  type: ['normal'],
  catchRate: 7.8,
  experienceYield: 175,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 },
  ],
  abilities: [
    {name: 'guts', hidden: false },
    {name: 'quick feet', hidden: false },
    {name: 'unnerve', hidden: true },
  ],
  height: 1.8,
  weight: 125.8,
  moves: [
    { name: 'hammer arm', level: 1 },
    { name: 'covet', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'lick', level: 1 },
    { name: 'fake tears', level: 1 },
    { name: 'fury swipes', level: 8 },
    { name: 'feint attack', level: 15 },
    { name: 'sweet scent', level: 22 },
    { name: 'play nice', level: 25 },
    { name: 'slash', level: 29 },
    { name: 'scary face', level: 38 },
    { name: 'rest', level: 47 },
    { name: 'snore', level: 79 },
    { name: 'thrash', level: 58 },
    { name: 'hammer arm', level: 67 },
  ],
};