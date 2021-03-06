module.exports = {
  name: 'parasect',
  pokedex: 47,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'paras', level: 0, condition: false },
      {  evolutionStep: 2, form: 'parasect', level: 24, condition: false },
    ]
  },
  stats: {
    hp: 60,
    atk: 95,
    def: 80,
    spAtk: 60,
    spDef: 80,
    spd: 30,
  },
  type: ['bug', 'grass'],
  catchRate: 9.8,
  experienceYield: 142,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 },
    { type: 'def', value: 1},
  ],
  abilities: [
    {name: 'effect spore', hidden: false },
    {name: 'dry skin', hidden: false },
    {name: 'damp', hidden: true }
  ],
  height: 1.0,
  weight: 29.5,
  moves: [
    { name: 'cross poison', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'stun spore', level: 1 },
    { name: 'poison powder', level: 1 },
    { name: 'absorb', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'stun spore', level: 6 },
    { name: 'poison powder', level: 6 },
    { name: 'absorb', level: 11 },
    { name: 'fury cutter', level: 17 },
    { name: 'spore', level: 22 },
    { name: 'slash', level: 29 },
    { name: 'growth', level: 37 },
    { name: 'gigadrain', level: 44 },
    { name: 'aromatherapy', level: 51 },
    { name: 'rage powder', level: 59 },
    { name: 'x-scissor', level: 66 },
  ],
  wild_items: {
    common: ['small_mushroom'],
    rare: ['big_mushroom', 'balm_mushroom'],
    guarantee: []
  }
};
