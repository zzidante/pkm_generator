module.exports = {
  name: 'scizor',
  pokedex: 212,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'scyther', level: 0, condition: false },
      {  evolutionStep: 2, form: 'scizor', level: false, condition: ['trade', 'metal coat'] },
    ]
  },
  variant: 'mega',
  stats: {
    hp: 70,
    atk: 130,
    def: 100,
    spAtk: 55,
    spDef: 80,
    spd: 65,
  },
  type: ['bug', 'steel'],
  catchRate: 3.3,
  experienceYield: 175,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 },
  ],
  abilities: [
    {name: 'swarm', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'light metal', hidden: true }
  ],
  height: 1.8,
  weight: 118.0,
  moves: [
    { name: 'feint', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'bullet punch', level: 1 },
    { name: 'focus energy', level: 5 },
    { name: 'pursuit', level: 9 },
    { name: 'false swipe', level: 13 },
    { name: 'agility', level: 17 },
    { name: 'metal claw', level: 21 },
    { name: 'fury cutter', level: 25 },
    { name: 'slash', level: 29 },
    { name: 'iron defense', level: 33 },
    { name: 'double team', level: 37 },
    { name: 'x-scissor', level: 41 },
    { name: 'night slash', level: 45 },
    { name: 'double hit', level: 49 },
    { name: 'iron head', level: 50 },
    { name: 'swords dance', level: 57 },
    { name: 'feint', level: 61 },
  ],
};