module.exports = {
  name: 'alolan geodude',
  pokedex: 74,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'alolan geodude', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan graveler', level: 25, condition: false },
      {  evolutionStep: 2, form: 'alolan golem', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: true },  
  stats: {
    hp: 40,
    atk: 80,
    def: 100,
    spAtk: 30,
    spDef: 30,
    spd: 20,
  },
  type: ['rock', 'electric'],
  catchRate: 33.3,
  experienceYield: 60,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'magnet pull', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'galvanize', hidden: true }
  ],
  height: 0.4,
  weight: 20.3,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'defense curl', level: 1 },
    { name: 'charge', level: 4 },
    { name: 'rock polish', level: 6 },
    { name: 'rollout', level: 10 },
    { name: 'spark', level: 12 },
    { name: 'rock throw', level: 16 },
    { name: 'smack down', level: 18 },
    { name: 'thunder punch', level: 22 },
    { name: 'self-destruct', level: 24 },
    { name: 'stealth rock', level: 28 },
    { name: 'rock blast', level: 30 },
    { name: 'discharge', level: 34 },
    { name: 'explosion', level: 36 },
    { name: 'double-edge', level: 40 },
    { name: 'stone edge', level: 42 },
  ],
};
