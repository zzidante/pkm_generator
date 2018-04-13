module.exports = {
  name: 'poliwag',
  pokedex: 60,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'poliwag', level: 0, condition: false },
      {  evolutionStep: 2, form: 'polywhirl', level: 25, condition: false },
      {  evolutionStep: 3, form: 'poliwrath', level: false, condition: 'water stone' },
      {  evolutionStep: 3, form: 'politoed', level: false, condition: 'king\'s rock'},
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 40,
    atk: 50,
    def: 40,
    spAtk: 40,
    spDef: 40,
    spd: 90,
  },
  type: ['water'],
  catchRate: 33.3,
  experienceYield: 60,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'water absorb', hidden: false },
    {name: 'damp', hidden: false },
    {name: 'swift swim', hidden: true }
  ],
  height: 0.6,
  weight: 27.3,
  moves: [
    { name: 'water sport', level: 1 },
    { name: 'water gun', level: 5 },
    { name: 'hypnosis', level: 8 },
    { name: 'bubble', level: 11 },
    { name: 'double slap', level: 15 },
    { name: 'rain dance', level: 18 },
    { name: 'body slam', level: 21 },
    { name: 'bubble beam', level: 25 },
    { name: 'mud shot', level: 28 },
    { name: 'belly drum', level: 31 },
    { name: 'wake-up slap', level: 35 },
    { name: 'hydro pump', level: 38 },
    { name: 'mud bomb', level: 41 },
  ],
};
