module.exports = {
  name: 'rapidash',
  pokedex: 78,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'ponyta', level: 0, condition: false },
      {  evolutionStep: 2, form: 'rapidash', level: 40, condition: 'fire stone' },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 65,
    atk: 100,
    def: 70,
    spAtk: 80,
    spDef: 80,
    spd: 105,
  },
  type: ['fire'],
  catchRate: 7.8,
  experienceYield: 175,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'flash fire', hidden: false },
    {name: 'flame body', hidden: true }
  ],
  height: 1.7,
  weight: 95.0,
  moves: [
    { name: 'fury attack', level: -1 },
    { name: 'fury attack', level: 1 },
    { name: 'poison jab', level: 1 },
    { name: 'megahorn', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'ember', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'ember', level: 9 },
    { name: 'flame wheel', level: 13 },
    { name: 'stomp', level: 17 },
    { name: 'flame charge', level: 21 },
    { name: 'fire spin', level: 25 },
    { name: 'take down', level: 29 },
    { name: 'inferno', level: 33 },
    { name: 'agility', level: 37 },
    { name: 'fire blast', level: 41 },
    { name: 'bounce', level: 45 },
    { name: 'flare blitz', level: 49 },
  ],
};
