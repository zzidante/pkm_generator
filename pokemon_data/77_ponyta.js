module.exports = {
  name: 'ponyta',
  pokedex: 77,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'ponyta', level: 0, condition: false },
      {  evolutionStep: 2, form: 'rapidash', level: 40, condition: 'fire stone' },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 50,
    atk: 85,
    def: 55,
    spAtk: 65,
    spDef: 65,
    spd: 90,
  },
  type: ['fire'],
  catchRate: 24.8,
  experienceYield: 82,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'flash fire', hidden: false },
    {name: 'flame body', hidden: true }
  ],
  height: 1.0,
  weight: 30.0,
  moves: [
    { name: 'growl', level: 1 },
    { name: 'tackle', level: 1 },
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
