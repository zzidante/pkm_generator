module.exports = {
  name: 'poliwhirl',
  pokedex: 61,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
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
    hp: 65,
    atk: 65,
    def: 65,
    spAtk: 50,
    spDef: 50,
    spd: 90,
  },
  type: ['water'],
  catchRate: 15.7,
  experienceYield: 135,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'water absorb', hidden: false },
    {name: 'damp', hidden: false },
    {name: 'swift swim', hidden: true }
  ],
  height: 1.0,
  weight: 44.2,
  moves: [
    { name: 'submission', level: 1 },
    { name: 'circle throw', level: 1 },
    { name: 'bubblebeam', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'hypnosis', level: 1 },
    { name: 'water gun', level: 5 },
    { name: 'hypnosis', level: 8 },
    { name: 'bubble', level: 11 },
    { name: 'double slap', level: 15 },
    { name: 'rain dance', level: 18 },
    { name: 'body slam', level: 21 },
    { name: 'bubble beam', level: 27 },
    { name: 'mud shot', level: 32 },
    { name: 'belly drum', level: 37 },
    { name: 'wake-up slap', level: 43 },
    { name: 'hydro pump', level: 48 },
    { name: 'mud bomb', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: ['kings_rock'],
    guarantee: []
  }
};
