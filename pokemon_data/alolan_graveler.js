module.exports = {
  name: 'alolan graveler',
  pokedex: 75,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'alolan geodude', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan graveler', level: 25, condition: false },
      {  evolutionStep: 3, form: 'alolan golem', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: 'classic' },  
  stats: {
    hp: 55,
    atk: 95,
    def: 115,
    spAtk: 45,
    spDef: 45,
    spd: 35,
  },
  type: ['rock', 'electric'],
  catchRate: 15.7,
  experienceYield: 137,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 }
  ],
  abilities: [
    {name: 'rock head', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'galvanize', hidden: true }
  ],
  height: 1.0,
  weight: 110.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'defence curl', level: 1 },
    { name: 'charge', level: 1 },
    { name: 'rock polish', level: 1 },
    { name: 'charge', level: 4 },
    { name: 'rock polish', level: 6 },
    { name: 'rollout', level: 10 },
    { name: 'spark', level: 12 },
    { name: 'rock throw', level: 16 },
    { name: 'smack down', level: 18 },
    { name: 'thunder punch', level: 22 },
    { name: 'self-destruct', level: 24 },
    { name: 'stealth rock', level: 30 },
    { name: 'rock blast', level: 34 },
    { name: 'discharge', level: 40 },
    { name: 'explosion', level: 44 },
    { name: 'double-edge', level: 50 },
    { name: 'stone edge', level: 54 },
  ],
};
