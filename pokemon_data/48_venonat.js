module.exports = {
  name: 'venonat',
  pokedex: 48,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'venonat', level: 0, condition: false },
      {  evolutionStep: 2, form: 'venomoth', level: 31, condition: false },
    ]
  },
  stats: {
    hp: 60,
    atk: 55,
    def: 50,
    spAtk: 40,
    spDef: 55,
    spd: 45,
  },
  type: ['bug', 'poison'],
  catchRate: 24.8,
  experienceYield: 61,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spdef', value: 1 },
  ],
  abilities: [
    {name: 'compound eyes', hidden: false },
    {name: 'tinted lens', hidden: false },
    {name: 'run away', hidden: true }
  ],
  height: 1.0,
  weight: 30.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'disable', level: 1 },
    { name: 'foresight', level: 1 },
    { name: 'supersonic', level: 5 },
    { name: 'confusion', level: 11 },
    { name: 'poison powder', level: 13 },
    { name: 'psybeam', level: 17 },
    { name: 'stun spore', level: 23 },
    { name: 'signal beam', level: 25 },
    { name: 'sleep powder', level: 29 },
    { name: 'leech life', level: 35 },
    { name: 'zen headbutt', level: 37 },
    { name: 'poison fang', level: 41 },
    { name: 'psychic', level: 47 },
  ],
};
