module.exports = {
  name: 'alakazam',
  pokedex: 65,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'abra', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kadabra', level: 16, condition: false },
      {  evolutionStep: 3, form: 'alakazam', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 55,
    atk: 50,
    def: 45,
    spAtk: 135,
    spDef: 95,
    spd: 120,
  },
  type: ['psychic'],
  catchRate: 6.5,
  experienceYield: 225,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'spatk', value: 3 }
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
    {name: 'inner focus', hidden: false },
    {name: 'magic guard', hidden: true }
  ],
  height: 1.5,
  weight: 48.0,
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
    { name: 'calm mind', level: 41 },
    { name: 'future sight', level: 43 },
    { name: 'trick', level: 46 },
  ],
};
