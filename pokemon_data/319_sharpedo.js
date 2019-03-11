module.exports = {
  name: 'sharpedo',
  pokedex: 319,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    totalEvolutionStats: 2,
    details: [
      {  evolutionStep: 1, form: 'carvanha', level: 0, condition: false },
      {  evolutionStep: 2, form: 'sharpedo', level: 30, condition: false },
    ]
  },
  stats: {
    hp: 70,
    atk: 120,
    def: 40,
    spAtk: 95,
    spDef: 40,
    spd: 95,
  },
  type: ['water', 'dark'],
  catchRate: 7.8,
  experienceYield: 161,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    { name: 'rough skin', hidden: false },
    { name: 'speed boost', hidden: true }
  ],
  height: 1.8,
  weight: 88.8, // kg
  moves: [
    { name: 'slash', level: 1 },
    // { name: 'night slash', level: 1 },
    // { name: 'feint', level: 1 },
    // { name: 'leer', level: 1 },
    // { name: 'bite', level: 1 },
    { name: 'rage', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'slash', level: -1 },
    { name: 'rage', level: 4 },
    { name: 'focus energy', level: 8 },
    { name: 'aqua jet', level: 11 },
    { name: 'assurance', level: 15 },
    { name: 'screech', level: 18 },
    { name: 'swagger', level: 22 },
    { name: 'ice fang', level: 25 },
    { name: 'scary face', level: 29 },
    { name: 'poison fang', level: 34 },
    { name: 'crunch', level: 40 },
    { name: 'agility', level: 45 },
    { name: 'skull bash', level: 51 },
    { name: 'taunt', level: 56 },
    { name: 'night slash', level: 62},
  ],
};
