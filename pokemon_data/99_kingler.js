module.exports = {
  name: 'kingler',
  pokedex: 99,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    totalEvolutionStats: 2,
    details: [
      { evolutionStep: 1, form: 'krabby', level: false, condition: false },
      { evolutionStep: 2, form: 'kingler', level: 28, condition: false },
    ]
  },
  stats: {
    hp: 55,
    atk: 130,
    def: 115,
    spAtk: 50,
    spDef: 50,
    spd: 75,
  },
  type: ['water'],
  catchRate: 7.8,
  experienceYield: 166,
  genderRatio: [50, 50],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    { name: 'shell armor', hidden: false },
    { name: 'hyper cutter', hidden: false },
    { name: 'sheer force', hidden: true }
  ],
  height: 4.03,
  weight: 60.0,
  moves: [
    { name: 'wide guard', level: 1 },
    { name: 'mud sport', level: 1 },
    { name: 'bubble', level: 1 },
    { name: 'vice grip', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'vice grip', level: 5 },
    { name: 'leer', level: 9 },
    { name: 'harden', level: 11 },
    { name: 'bubble beam', level: 15 },
    { name: 'mud shot', level: 19 },
    { name: 'metal claw', level: 21 },
    { name: 'stomp', level: 25 },
    { name: 'protect', level: 32 },
    { name: 'guillotine', level: 37 },
    { name: 'slam', level: 44 },
    { name: 'brine', level: 51 },
    { name: 'crabhammer', level: 56 },
    { name: 'flail', level: 63 },
  ],
}