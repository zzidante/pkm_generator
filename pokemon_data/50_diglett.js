module.exports = {
  name: 'diglett',
  pokedex: 50,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'diglett', level: 0, condition: false },
      {  evolutionStep: 2, form: 'dugtrio', level: 26, condition: false },
    ]
  },
  regional_variant: { type: 'alolan' },
  stats: {
    hp: 10,
    atk: 55,
    def: 25,
    spAtk: 35,
    spDef: 45,
    spd: 95,
  },
  type: ['ground'],
  catchRate: 33.3,
  experienceYield: 53,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'sand veil', hidden: false },
    {name: 'arena trap', hidden: false },
    {name: 'sand force', hidden: true }
  ],
  height: 0.2,
  weight: 0.8,
  moves: [
    { name: 'sand attack', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 4 },
    { name: 'astonish', level: 7 },
    { name: 'mud-slap', level: 10 },
    { name: 'magnitude', level: 14 },
    { name: 'bulldoze', level: 18 },
    { name: 'sucker punch', level: 22 },
    { name: 'mud bomb', level: 25 },
    { name: 'earth power', level: 28 },
    { name: 'dig', level: 31 },
    { name: 'slash', level: 35 },
    { name: 'earthquake', level: 39 },
    { name: 'fissure', level: 43 },
  ],
  wild_items: {
    common: [],
    rare: ['soft_sand'],
    guarantee: []
  }
};
