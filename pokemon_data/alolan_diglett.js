module.exports = {
  name: 'alolan diglett',
  pokedex: 50,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'alolan diglett', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan dugtrio', level: 26, condition: false },
    ]
  },
  stats: {
    hp: 10,
    atk: 55,
    def: 30,
    spAtk: 35,
    spDef: 45,
    spd: 90,
  },
  type: ['ground', 'steel'],
  catchRate: 33.3,
  experienceYield: 53,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'sand veil', hidden: false },
    {name: 'tangling hair', hidden: false },
    {name: 'sand force', hidden: true }
  ],
  height: 0.2,
  weight: 1.0,
  moves: [
    { name: 'sand attack', level: 1 },
    { name: 'metal claw', level: 1 },
    { name: 'growl', level: 4 },
    { name: 'astonish', level: 7 },
    { name: 'mud-slap', level: 10 },
    { name: 'magnitude', level: 14 },
    { name: 'bulldoze', level: 18 },
    { name: 'sucker punch', level: 22 },
    { name: 'mud bomb', level: 25 },
    { name: 'earth power', level: 28 },
    { name: 'dig', level: 31 },
    { name: 'iron head', level: 35 },
    { name: 'earthquake', level: 39 },
    { name: 'fissure', level: 43 },
  ],
};
