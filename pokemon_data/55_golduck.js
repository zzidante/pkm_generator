module.exports = {
  name: 'golduck',
  pokedex: 55,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'psyduck', level: 0, condition: false },
      {  evolutionStep: 2, form: 'golduck', level: 33, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 80,
    atk: 82,
    def: 78,
    spAtk: 95,
    spDef: 80,
    spd: 85,
  },
  type: ['water'],
  catchRate: 9.8,
  experienceYield: 175,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 2 }
  ],
  abilities: [
    {name: 'damp', hidden: false },
    {name: 'cloud nine', hidden: false },
    {name: 'swift swim', hidden: true }
  ],
  height: 1.7,
  weight: 76.6,
  moves: [
    { name: 'me first', level: 1 },
    { name: 'aqua jet', level: 1 },
    { name: 'water sport', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'water gun', level: 7 },
    { name: 'confusion', level: 10 },
    { name: 'fury swipes', level: 13 },
    { name: 'water pulse', level: 16 },
    { name: 'diable', level: 19 },
    { name: 'screech', level: 22 },
    { name: 'zen headbutt', level: 25 },
    { name: 'aqua tail', level: 28 },
    { name: 'soak', level: 31 },
    { name: 'psych up', level: 36 },
    { name: 'amnesia', level: 41 },
    { name: 'hydro pump', level: 46 },
    { name: 'wonder room', level: 51 },
  ],
};
