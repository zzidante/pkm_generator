module.exports = {
  name: 'paras',
  pokedex: 46,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'paras', level: 0, condition: false },
      {  evolutionStep: 2, form: 'parasect', level: 24, condition: false },
    ]
  },
  stats: {
    hp: 35,
    atk: 70,
    def: 55,
    spAtk: 45,
    spDef: 55,
    spd: 25,
  },
  type: ['bug', 'grass'],
  catchRate: 24.8,
  experienceYield: 57,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'effect spore', hidden: false },
    {name: 'dry skin', hidden: false },
    {name: 'damp', hidden: true }
  ],
  height: 0.3,
  weight: 5.4,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'stun spore', level: 6 },
    { name: 'poison powder', level: 6 },
    { name: 'absorb', level: 11 },
    { name: 'fury cutter', level: 17 },
    { name: 'spore', level: 22 },
    { name: 'slash', level: 27 },
    { name: 'growth', level: 33 },
    { name: 'gigadrain', level: 38 },
    { name: 'aromatherapy', level: 43 },
    { name: 'rage powder', level: 49 },
    { name: 'x-scissor', level: 54 },
  ],
};
