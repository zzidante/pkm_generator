module.exports = {
  name: 'kadabra',
  pokedex: 64,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'abra', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kadabra', level: 16, condition: false },
      {  evolutionStep: 3, form: 'alakazam', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 40,
    atk: 35,
    def: 30,
    spAtk: 120,
    spDef: 70,
    spd: 105,
  },
  type: ['psychic'],
  catchRate: 13.1,
  experienceYield: 140,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'spatk', value: 2 }
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
    {name: 'inner focus', hidden: false },
    {name: 'magic guard', hidden: true }
  ],
  height: 1.3,
  weight: 56.5,
  moves: [
    { name: 'kinesis', level: 1 },
    { name: 'teleport', level: 1 },
    { name: 'confusion', level: 1 },
    { name: 'kinesis', level: -1 },
    { name: 'confusion', level: 16 },
    { name: 'disable', level: 18 },
    { name: 'psybeam', level: 21 },
    { name: 'miracle eye', level: 23 },
    { name: 'reflect', level: 26 },
    { name: 'psycho cut', level: 28 },
    { name: 'recover', level: 31 },
    { name: 'telekinesis', level: 33 },
    { name: 'ally switch', level: 36 },
    { name: 'psychic', level: 38 },
    { name: 'role play', level: 41 },
    { name: 'future sight', level: 43 },
    { name: 'trick', level: 46 },
  ],
};
