module.exports = {
  name: 'metapod',
  pokedex: 11,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'caterpie', level: 0, condition: false },
      {  evolutionStep: 2, form: 'metapod', level: 7, condition: false },
      {  evolutionStep: 3, form: 'butterfree', level: 10, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 50,
    atk: 20,
    def: 55,
    spAtk: 25,
    spDef: 25,
    spd: 30,
  },
  type: ['bug'],
  catchRate: 15.7,
  experienceYield: 72,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 },
  ],
  abilities: [
    {name: 'shed skin', hidden: false },
  ],
  height: 0.7,
  weight: 9.9,
  moves: [
    { name: 'harden', level: -1 },
    { name: 'harden', level: 1 },
  ],
};