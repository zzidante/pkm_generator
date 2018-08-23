module.exports = {
  name: 'shellder',
  pokedex: 90,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    totalEvolutionStats: 2,
    details: [
      { evolutionStep: 1, form: 'shellder', level: false, condition: false },
      { evolutionStep: 2, form: 'cloyster', level: false, condition: 'water stone' },
    ]
  },
  stats: {
    hp: 30,
    atk: 65,
    def: 100,
    spAtk: 45,
    spDef: 25,
    spd: 40,
  },
  type: ['water'],
  catchRate: 24.8,
  experienceYield: 61,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 1 }
  ],
  abilities: [
    { name: 'shell armor', hidden: false },
    { name: 'skill link', hidden: false },
    { name: 'overcoat', hidden: true }
  ],
  height: 0.3,
  weight: 4.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'withdraw', level: 4 },
    { name: 'super sonic', level: 8 },
    { name: 'icicle spear', level: 13 },
    { name: 'protect', level: 16 },
    { name: 'leer', level: 20 },
    { name: 'clamp', level: 25 },
    { name: 'razor shell', level: 28 },
    { name: 'aurora beam', level: 32 },
    { name: 'whirlpool', level: 37 },
    { name: 'brine', level: 40 },
    { name: 'iron defence', level: 44 },
    { name: 'ice beam', level: 52 },
    { name: 'shell smash', level: 56 },
    { name: 'hydro pump', level: 61 },
  ],
};
