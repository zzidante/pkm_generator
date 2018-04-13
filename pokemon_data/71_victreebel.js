module.exports = {
  name: 'victreebell',
  pokedex: 71,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'bellsprout', level: 0, condition: false },
      {  evolutionStep: 2, form: 'weepinbell', level: 21, condition: false },
      {  evolutionStep: 3, form: 'victreebell', level: 28, condition: 'leaf stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 80,
    atk: 105,
    def: 65,
    spAtk: 100,
    spDef: 70,
    spd: 70,
  },
  type: ['grass', 'poison'],
  catchRate: 5.9,
  experienceYield: 221,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 3 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'gluttony', hidden: true }
  ],
  height: 1.7,
  weight: 15.5,
  moves: [
    { name: 'leaf tornado', level: 1 },
    { name: 'stockpile', level: 1 },
    { name: 'swallow', level: 1 },
    { name: 'spit up', level: 1 },
    { name: 'sleep powder', level: 1 },
    { name: 'vine whip', level: 1 },
    { name: 'sweet scent', level: 1 },
    { name: 'razor leaf', level: 1 },
    { name: 'leaf tornado', level: -1 },
    { name: 'leaf storm', level: 32 },
    { name: 'leaf blade', level: 44 },
  ],
};
