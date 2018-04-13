module.exports = {
  name: 'weepinbell',
  pokedex: 70,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bellsprout', level: 0, condition: false },
      {  evolutionStep: 2, form: 'weepinbell', level: 21, condition: false },
      {  evolutionStep: 3, form: 'victreebell', level: 28, condition: 'leaf stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 65,
    atk: 90,
    def: 50,
    spAtk: 85,
    spDef: 45,
    spd: 55,
  },
  type: ['grass', 'poison'],
  catchRate: 15.7,
  experienceYield: 137,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'gluttony', hidden: true }
  ],
  height: 1.0,
  weight: 6.4,
  moves: [
    { name: 'vine whip', level: 1 },
    { name: 'growth', level: 1 },
    { name: 'wrap', level: 1 },
    { name: 'growth', level: 7 },
    { name: 'wrap', level: 11 },
    { name: 'sleep powder', level: 13 },
    { name: 'poison powder', level: 15 },
    { name: 'stun spore', level: 17 },
    { name: 'acid', level: 24 },
    { name: 'knock off', level: 29 },
    { name: 'sweet scent', level: 32 },
    { name: 'gastro acid', level: 39 },
    { name: 'razor leaf', level: 44 },
    { name: 'poison jab', level: 47 },
    { name: 'slam', level: 54 },
    { name: 'wring out', level: 58 },
  ],
};
