module.exports = {
  name: 'magikarp',
  pokedex: 129,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'magikarp', level: 0, condition: false },
      {  evolutionStep: 2, form: 'gyarados', level: 20, condition: false },
    ]
  },            
  stats: {
    hp: 20,
    atk: 10,
    def: 55,
    spAtk: 15,
    spDef: 20,
    spd: 80,
  },
  type: ['water'],
  catchRate: 33.3,
  experienceYield: 40,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'swift swim', hidden: false},
    {name: 'rattled', hidden: true }
  ],
  height: 0.9,
  weight: 10.0,
  moves: [
    { name: 'splash', level: 1 },
    { name: 'tackle', level: 15 },
    { name: 'flail', level: 30 },
  ],
};
