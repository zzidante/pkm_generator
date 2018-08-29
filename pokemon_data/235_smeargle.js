module.exports = {
  name: 'smeargle',
  pokedex: 235,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'smeargle', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 55,
    atk: 20,
    def: 35,
    spAtk: 20,
    spDef: 45,
    spd: 75,
  },
  type: ['normal'],
  catchRate: 5.9,
  experienceYield: 88,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'own tempo', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'moody', hidden: true },
  ],
  height: 1.2,
  weight: 58.0,
  moves: [
    { name: 'sketch', level: 1 },
    { name: 'sketch', level: 11 },
    { name: 'sketch', level: 21 },
    { name: 'sketch', level: 31 },
    { name: 'sketch', level: 41 },
    { name: 'sketch', level: 51 },
    { name: 'sketch', level: 61 },
    { name: 'sketch', level: 71 },
    { name: 'sketch', level: 81 },
    { name: 'sketch', level: 91 },
  ],
};