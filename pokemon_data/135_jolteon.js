module.exports = {
  name: 'jolteon',
  pokedex: 135,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'eevee', level: 0, condition: false },
      {  evolutionStep: 2, form: 'jolteon', level: false, condition: 'thunder stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 65,
    atk: 65,
    def: 60,
    spAtk: 110,
    spDef: 95,
    spd: 130,
  },
  type: ['electric'],
  catchRate: 5.9,
  experienceYield: 184,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spd', value: 2 },
  ],
  abilities: [
    {name: 'volt absorb', hidden: false },
    {name: 'quick feet', hidden: true }
  ],
  height: 0.8,
  weight: 24.5,
  moves: [
    { name: 'thunder shock', level: -1 },
    { name: 'thunder shock', level: 1 },
    { name: 'helping hand', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick atack', level: 13 },
    { name: 'double kick', level: 17 },
    { name: 'thunder fang', level: 20 },
    { name: 'pin missile', level: 25 },
    { name: 'agility', level: 29 },
    { name: 'thunder wave', level: 33 },
    { name: 'discharge', level: 37 },
    { name: 'last resort', level: 41 },
    { name: 'thunder', level: 45 },
  ],
};