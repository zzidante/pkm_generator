module.exports = {
  name: 'poliwrath',
  pokedex: 62,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
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
    hp: 90,
    atk: 95,
    def: 95,
    spAtk: 70,
    spDef: 90,
    spd: 70,
  },
  type: ['water', 'fighting'],
  catchRate: 5.9,
  experienceYield: 230,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 3 }
  ],
  abilities: [
    {name: 'water absorb', hidden: false },
    {name: 'damp', hidden: false },
    {name: 'swift swim', hidden: true }
  ],
  height: 1.3,
  weight: 54.0,
  moves: [
    { name: 'submission', level: 1 },
    { name: 'circle throw', level: 1 },
    { name: 'bubblebeam', level: 1 },
    { name: 'hypnosis', level: 1 },
    { name: 'double slap', level: 1 },
    { name: 'submission', level: -1 },
    { name: 'dynamic punch', level: 32 },
    { name: 'mind reader', level: 43 },
    { name: 'circle throw', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: ['kings_rock'],
    guarantee: []
  }
};
