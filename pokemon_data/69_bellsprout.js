module.exports = {
  name: 'bellsprout',
  pokedex: 69,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bellsprout', level: 0, condition: false },
      {  evolutionStep: 2, form: 'weepinbell', level: 21, condition: false },
      {  evolutionStep: 3, form: 'victreebell', level: 28, condition: 'leaf stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 50,
    atk: 75,
    def: 35,
    spAtk: 70,
    spDef: 30,
    spd: 40,
  },
  type: ['grass', 'poison'],
  catchRate: 33.3,
  experienceYield: 60,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'gluttony', hidden: true }
  ],
  height: 0.7,
  weight: 4.4,
  moves: [
    { name: 'vine whip', level: 1 },
    { name: 'growth', level: 7 },
    { name: 'wrap', level: 11 },
    { name: 'sleep powder', level: 13 },
    { name: 'poison powder', level: 15 },
    { name: 'stun spore', level: 17 },
    { name: 'acid', level: 23 },
    { name: 'knock off', level: 27 },
    { name: 'sweet scent', level: 29 },
    { name: 'gastro acid', level: 35 },
    { name: 'razor leaf', level: 39 },
    { name: 'poison jab', level: 41 },
    { name: 'slam', level: 47 },
    { name: 'wring out', level: 50 },
  ],
};
