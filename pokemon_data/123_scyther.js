module.exports = {
  name: 'scyther',
  pokedex: 123,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'scyther', level: 0, condition: false },
      {  evolutionStep: 2, form: 'scizor', level: false, condition: ['trade', 'metal coat'] },
    ]
  },
  variant: false,
  stats: {
    hp: 70,
    atk: 110,
    def: 80,
    spAtk: 55,
    spDef: 80,
    spd: 105,
  },
  type: ['bug', 'flying'],
  catchRate: 5.9,
  experienceYield: 100,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 },
  ],
  abilities: [
    {name: 'swarm', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'steadfast', hidden: true }
  ],
  height: 1.5,
  weight: 56.0,
  moves: [
    { name: 'vacuum wave', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'focus energy', level: 5 },
    { name: 'pursuit', level: 9 },
    { name: 'false swipe', level: 13 },
    { name: 'agility', level: 17 },
    { name: 'wing attack', level: 21 },
    { name: 'fury cutter', level: 25 },
    { name: 'slash', level: 29 },
    { name: 'razor wind', level: 33 },
    { name: 'double team', level: 37 },
    { name: 'x-scissor', level: 41 },
    { name: 'night slash', level: 45 },
    { name: 'double hit', level: 49 },
    { name: 'air slash', level: 50 },
    { name: 'swords dance', level: 57 },
    { name: 'feint', level: 62 },
  ],
};