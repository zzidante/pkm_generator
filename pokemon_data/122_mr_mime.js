module.exports = {
  name: 'mr.mime',
  pokedex: 122,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'mime.jr', level: 0, condition: false },
      {  evolutionStep: 2, form: 'mr.mime', level: false, condition: ['level up', 'move mimic'] },
    ]
  },
  variant: false,
  stats: {
    hp: 40,
    atk: 45,
    def: 65,
    spAtk: 100,
    spDef: 120,
    spd: 90,
  },
  type: ['psychic', 'fairy'],
  catchRate: 5.9,
  experienceYield: 161,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'sp.def', value: 2 },
  ],
  abilities: [
    {name: 'soundproof', hidden: false },
    {name: 'filter', hidden: false },
    {name: 'technician', hidden: true }
  ],
  height: 1.3,
  weight: 120.1,
  moves: [
    { name: 'misty terrain', level: 1 },
    { name: 'magical leaf', level: 1 },
    { name: 'quick guard', level: 1 },
    { name: 'wide guard', level: 1 },
    { name: 'power swap', level: 1 },
    { name: 'guard swap', level: 1 },
    { name: 'barrier', level: 1 },
    { name: 'pound', level: 1 },
    { name: 'confusion', level: 1 },
    { name: 'copycat', level: 4 },
    { name: 'meditate', level: 8 },
    { name: 'double slap', level: 11 },
    { name: 'mimic', level: 15 },
    { name: 'psywave', level: 15 },
    { name: 'encore', level: 18 },
    { name: 'lightscreen', level: 22 },
    { name: 'reflect', level: 22 },
    { name: 'psybeam', level: 25 },
    { name: 'substitute', level: 29 },
    { name: 'recycle', level: 32 },
    { name: 'trick', level: 36 },
    { name: 'psychic', level: 39 },
    { name: 'role play', level: 43 },
    { name: 'baton pass', level: 46 },
    { name: 'safeguard', level: 50 },
  ],
};