module.exports = {
  name: 'ampharos',
  pokedex: 181,
  //
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2, // max branching number
    totalEvolutionStats: 2, // total types of evolutions regardless of branching
    details: [
      {  evolutionStep: 1, form: 'magikarp', level: 0, condition: false },
      {  evolutionStep: 2, form: 'gyarados', level: 20, condition: false },
    ]
  },            
  stats: {
    hp: 95,
    atk: 125,
    def: 79,
    spAtk: 60,
    spDef: 100,
    spd: 81,
  },
  type: ['water', 'flying'],
  catchRate: 5.9,
  experienceYield: 189,
  genderRatio: [50, 50],
  evYield: [
    { type: 'atk', value: 2}
  ],
  abilities: [
    {name: 'intimidate'},
    {name: 'moxie', hidden: true }
  ],
  height: 6.5,
  weight: 235.0,
  moves: [
    { name: 'bite', level: 1 },
    { name: 'thrash', level: 1 },
    { name: 'leer', level: 21 },
    { name: 'twister', level: 24 },
    { name: 'ice fang', level: 27 },
    { name: 'aqua tail', level: 30 },
    { name: 'scary face', level: 33 },
    { name: 'dragon rage', level: 36 },
    { name: 'crunch', level: 39 },
    { name: 'hydro pump', level: 42 },
    { name: 'dragon dance', level: 45 },
    { name: 'hurricane', level: 48 },
    { name: 'rain dance', level: 51 },
    { name: 'hyper beam', level: 54 },
  ],
};
