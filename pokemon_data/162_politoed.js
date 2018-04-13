module.exports = {
  name: 'politoed',
  pokedex: 186,
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
    atk: 75,
    def: 75,
    spAtk: 90,
    spDef: 100,
    spd: 70,
  },
  type: ['water'],
  catchRate: 5.9,
  experienceYield: 225,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spdef', value: 3 }
  ],
  abilities: [
    {name: 'water absorb', hidden: false },
    {name: 'damp', hidden: false },
    {name: 'drizzle', hidden: true }
  ],
  height: 1.1,
  weight: 33.9,
  moves: [
    { name: 'bubblebeam', level: 1 },
    { name: 'hypnosis', level: 1 },
    { name: 'double slap', level: 1 },
    { name: 'perish song', level: 1 },
    { name: 'swagger', level: 27 },
    { name: 'bounce', level: 37 },
    { name: 'hyper voice', level: 48 },
  ],
};
