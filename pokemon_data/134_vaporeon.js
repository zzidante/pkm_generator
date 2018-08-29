module.exports = {
  name: 'vaporeon',
  pokedex: 134,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'eevee', level: 0, condition: false },
      {  evolutionStep: 2, form: 'vaporeon', level: false, condition: 'water stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 130,
    atk: 65,
    def: 60,
    spAtk: 110,
    spDef: 95,
    spd: 65,
  },
  type: ['water'],
  catchRate: 5.9,
  experienceYield: 184,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'hp', value: 2 },
  ],
  abilities: [
    {name: 'water absorb', hidden: false },
    {name: 'hydration', hidden: true }
  ],
  height: 1.0,
  weight: 29.0,
  moves: [
    { name: 'water gun', level: -1 },
    { name: 'water gun', level: 1 },
    { name: 'helping hand', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick atack', level: 13 },
    { name: 'water pulse', level: 17 },
    { name: 'aurora beam', level: 20 },
    { name: 'aqua ring', level: 25 },
    { name: 'acid armor', level: 29 },
    { name: 'haze', level: 33 },
    { name: 'muddy water', level: 37 },
    { name: 'last resort', level: 41 },
    { name: 'hydro pump', level: 45 },
  ],
};