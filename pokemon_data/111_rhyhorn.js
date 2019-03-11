module.exports = {
  name: 'rhyhorn',
  pokedex: 111,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'rhyhorn', level: 1, condition: false },
      {  evolutionStep: 1, form: 'rhydon', level: 42, condition: false },
      {  evolutionStep: 1, form: 'rhyperior', level: false, condition: 'trade holding item: protector' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 80,
    atk: 85,
    def: 95,
    spAtk: 30,
    spDef: 30,
    spd: 25,
  },
  type: ['ground', 'rock'],
  catchRate: 15.7,
  experienceYield: 69,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 1 },
  ],
  abilities: [
    {name: 'lightning rod', hidden: false },
    {name: 'rock head', hidden: false },
    {name: 'reckless', hidden: true }
  ],
  height: 1.0,
  weight: 115,
  moves: [
    { name: 'horn attack', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'fury attack', level: 1 },
    { name: 'scary face', level: 1 },
    { name: 'fury attack', level: 5 },
    { name: 'scary face', level: 9 },
    { name: 'smack down', level: 13 },
    { name: 'stomp', level: 17 },
    { name: 'bulldoze', level: 21 },
    { name: 'chip away', level: 25 },
    { name: 'rock blast', level: 29 },
    { name: 'drill run', level: 33 },
    { name: 'take down', level: 37 },
    { name: 'stone edge', level: 41 },
    { name: 'earthquake', level: 45 },
    { name: 'megahorn', level: 49 },
    { name: 'horn drill', level: 53 },
  ],
};
