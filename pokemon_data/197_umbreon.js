module.exports = {
  name: 'umbreon',
  pokedex: 197,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'eevee', level: 0, condition: false },
      {  evolutionStep: 2, form: 'umbreon', level: true, condition: ['friendship', 'night'] },
    ]
  },
  variant: false,
  stats: {
    hp: 95,
    atk: 65,
    def: 110,
    spAtk: 60,
    spDef: 130,
    spd: 65,
  },
  type: ['dark'],
  catchRate: 5.9,
  experienceYield: 184,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spDef', value: 2 },
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
    {name: 'inner focus', hidden: true }
  ],
  height: 1.0,
  weight: 27.0,
  moves: [
    { name: 'pursuit', level: -1 },
    { name: 'pursuit', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick atack', level: 13 },
    { name: 'confuse ray', level: 17 },
    { name: 'feint attack', level: 20 },
    { name: 'assurance', level: 25 },
    { name: 'screech', level: 29 },
    { name: 'moonlight', level: 33 },
    { name: 'mean look', level: 37 },
    { name: 'last resort', level: 41 },
    { name: 'guard swap', level: 45 },
  ],
};