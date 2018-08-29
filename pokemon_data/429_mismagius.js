module.exports = {
  name: 'mismagius',
  pokedex: 429,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'misdreavus', level: 0, condition: false },
      {  evolutionStep: 2, form: 'mismagius', level: false, condition: 'dusk stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 60,
    atk: 60,
    def: 60,
    spAtk: 105,
    spDef: 105,
    spd: 105,
  },
  type: ['ghost'],
  catchRate: 5.9,
  experienceYield: 173,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spAtk', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'levitate', hidden: false },
  ],
  height: 0.7,
  weight: 1.0,
  moves: [
    { name: 'mystical fire', level: 1 },
    { name: 'power gem', level: 1 },
    { name: 'phantom force', level: 1 },
    { name: 'lucky chant', level: 1 },
    { name: 'magical leaf', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'psywave', level: 1 },
    { name: 'spite', level: 1 },
    { name: 'astonish', level: 1 },
  ],
};