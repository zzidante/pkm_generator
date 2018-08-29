module.exports = {
  name: 'aipom',
  pokedex: 189,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'aipom', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ambipom', level: true, condition: 'move double hit' },
    ]
  },
  variant: false,
  stats: {
    hp: 55,
    atk: 70,
    def: 55,
    spAtk: 40,
    spDef: 55,
    spd: 85,
  },
  type: ['normal'],
  catchRate: 5.9,
  experienceYield: 72,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'pickup', hidden: false },
    {name: 'skill link', hidden: true }
  ],
  height: 0.8,
  weight: 11.5,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 4 },
    { name: 'astonish', level: 8 },
    { name: 'baton pass', level: 11 },
    { name: 'tickle', level: 15 },
    { name: 'fury swipes', level: 18 },
    { name: 'swift', level: 22 },
    { name: 'screech', level: 25 },
    { name: 'agility', level: 29 },
    { name: 'double hit', level: 32 },
    { name: 'fling', level: 36 },
    { name: 'nasty plot', level: 39 },
    { name: 'last resort', level: 43 },
  ],
};