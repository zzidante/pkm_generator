module.exports = {
  name: 'natu',
  pokedex: 177,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    totalEvolutionStats: 2,
    details: [
      {  evolutionStep: 1, form: 'natu', level: 0, condition: false },
      {  evolutionStep: 2, form: 'xatu', level: 25, condition: false },
    ]
  },
  stats: {
    hp: 40,
    atk: 50,
    def: 45,
    spAtk: 70,
    spDef: 45,
    spd: 70,
  },
  type: ['psychic', 'flying'],
  catchRate: 24.8,
  experienceYield: 64,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spAtk', value: 1 }
  ],
  abilities: [
    { name: 'synchronize', hidden: false },
    { name: 'early bird', hidden: false },
    { name: 'magic bounce', hidden: true }
  ],
  height: 0.2,
  weight: 2.0, // kg
  moves: [
    { name: 'peck', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'night shade', level: 6 },
    { name: 'teleport', level: 9 },
    { name: 'lucky chant', level: 12 },
    { name: 'stored power', level: 17 },
    { name: 'ominous wind', level: 20 },
    { name: 'confuse ray', level: 23 },
    { name: 'wish', level: 28 },
    { name: 'psychic', level: 33 },
    { name: 'miracle eye', level: 36 },
    { name: 'psycho shift', level: 39 },
    { name: 'future sight', level: 44 },
    { name: 'power swap', level: 47 },
    { name: 'guard swap', level: 47 },
    { name: 'me first', level: 50 },
  ],
};
