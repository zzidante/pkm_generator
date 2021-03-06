module.exports = {
  name: 'espeon',
  pokedex: 196,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'eevee', level: 0, condition: false },
      {  evolutionStep: 2, form: 'espeon', level: true, condition: ['friendship', 'day'] },
    ]
  },
  variant: false,
  stats: {
    hp: 65,
    atk: 65,
    def: 60,
    spAtk: 130,
    spDef: 95,
    spd: 110,
  },
  type: ['psychic'],
  catchRate: 5.9,
  experienceYield: 184,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 2 },
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
    {name: 'magic bounce', hidden: true }
  ],
  height: 0.9,
  weight: 26.5,
  moves: [
    { name: 'confusion', level: -1 },
    { name: 'helping hand', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick atack', level: 13 },
    { name: 'swift', level: 17 },
    { name: 'psybeam', level: 20 },
    { name: 'future sight', level: 25 },
    { name: 'psych up', level: 29 },
    { name: 'morning sun', level: 33 },
    { name: 'psychic', level: 37 },
    { name: 'last resort', level: 41 },
    { name: 'power swap', level: 45 },
  ],
};