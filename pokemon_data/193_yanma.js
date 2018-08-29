module.exports = {
  name: 'yanma',
  pokedex: 193,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'yanma', level: 0, condition: false },
      {  evolutionStep: 2, form: 'yanmega', level: true, condition: 'move ancient power' },
    ]
  },
  variant: false,
  stats: {
    hp: 65,
    atk: 65,
    def: 45,
    spAtk: 75,
    spDef: 45,
    spd: 95,
  },
  type: ['bug', 'flying'],
  catchRate: 9.8,
  experienceYield: 78,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'speed boost', hidden: false },
    {name: 'compound eyes', hidden: false },
    {name: 'frisk', hidden: true }
  ],
  height: 1.2,
  weight: 38.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'foresight', level: 1 },
    { name: 'quick attack', level: 6 },
    { name: 'double team', level: 11 },
    { name: 'sonic boom', level: 14 },
    { name: 'detect', level: 17 },
    { name: 'supersonic', level: 22 },
    { name: 'uproar', level: 27 },
    { name: 'pursuit', level: 30 },
    { name: 'ancient power', level: 33 },
    { name: 'hypnosis', level: 38 },
    { name: 'wing attack', level: 43 },
    { name: 'screech', level: 46 },
    { name: 'u-turn', level: 49 },
    { name: 'air slash', level: 54 },
    { name: 'bug buzz', level: 57 },
  ],
};