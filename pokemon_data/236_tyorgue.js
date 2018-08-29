module.exports = {
  name: 'tyrogue',
  pokedex: 236,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'tyrogue', level: 0, condition: false },
      {  evolutionStep: 2, form: 'hitmonlee', level: 20, condition: 'atk > def' },
      {  evolutionStep: 2, form: 'hitmonchan', level: 20, condition: 'atk < def' },
      {  evolutionStep: 2, form: 'hitmontop', level: 20, condition: 'atk = def' },
    ]
  },
  variant: false,
  stats: {
    hp: 35,
    atk: 35,
    def: 35,
    spAtk: 35,
    spDef: 35,
    spd: 35,
  },
  type: ['fighting'],
  catchRate: 9.8,
  experienceYield: 42,
  genderRatio: [{m: 100}, {f: 0}],
  evYield: [
    { type: 'atk', value: 1 },
  ],
  abilities: [
    {name: 'guts', hidden: false },
    {name: 'steadfast', hidden: false },
    {name: 'vital spirit', hidden: true },
  ],
  height: 0.7,
  weight: 21.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'helping hand', level: 1 },
    { name: 'fake out', level: 1 },
    { name: 'foresight', level: 1 },
  ],
};