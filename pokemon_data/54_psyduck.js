module.exports = {
  name: 'psyduck',
  pokedex: 54,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'psyduck', level: 0, condition: false },
      {  evolutionStep: 2, form: 'golduck', level: 33, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 50,
    atk: 52,
    def: 48,
    spAtk: 65,
    spDef: 50,
    spd: 55,
  },
  type: ['water'],
  catchRate: 24.8,
  experienceYield: 64,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 1 }
  ],
  abilities: [
    {name: 'damp', hidden: false },
    {name: 'cloud nine', hidden: false },
    {name: 'swift swim', hidden: true }
  ],
  height: 0.8,
  weight: 19.6,
  moves: [
    { name: 'water sport', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'water gun', level: 7 },
    { name: 'confusion', level: 10 },
    { name: 'fury swipe', level: 13 },
    { name: 'water pulse', level: 16 },
    { name: 'disable', level: 19 },
    { name: 'screech', level: 22 },
    { name: 'zen headbutt', level: 25 },
    { name: 'aqua tail', level: 28 },
    { name: 'soak', level: 31 },
    { name: 'psych up', level: 34 },
    { name: 'amnesia', level: 37 },
    { name: 'hydro pump', level: 40 },
    { name: 'wonder room', level: 43 },
  ],
};
