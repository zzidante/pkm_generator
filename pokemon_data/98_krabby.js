module.exports = {
  name: 'krabby',
  pokedex: 98,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    totalEvolutionStats: 2,
    details: [
      {  evolutionStep: 1, form: 'krabby', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kingler', level: 28, condition: false },
    ]
  },
  stats: {
    hp: 30,
    atk: 105,
    def: 90,
    spAtk: 25,
    spDef: 25,
    spd: 50,
  },
  type: ['water'],
  catchRate: 29.4,
  experienceYield: 65,
  genderRatio: [50, 50],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    { name: 'hyper cutter', hidden: false },
    { name: 'shell armor', hidden: false },
    { name: 'sheer force', hidden: true }
  ],
  height: 0.4,
  weight: 6.05,
  moves: [
    { name: 'mud sport', level: 1 },
    { name: 'bubble', level: 1 },
    { name: 'vice grip', level: 5 },
    { name: 'leer', level: 9 },
    { name: 'harden', level: 11 },
    { name: 'bubblebeam', level: 15 },
    { name: 'mud shot', level: 19 },
    { name: 'metal claw', level: 21 },
    { name: 'stomp', level: 25 },
    { name: 'protect', level: 29 },
    { name: 'guillotene', level: 31 },
    { name: 'slam', level: 35 },
    { name: 'brine', level: 39 },
    { name: 'crabhammer', level: 41 },
    { name: 'flail', level: 45 },
  ],
};
