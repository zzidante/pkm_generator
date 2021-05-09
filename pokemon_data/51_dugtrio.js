module.exports = {
  name: 'dugtrio',
  pokedex: 51,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'diglett', level: 0, condition: false },
      {  evolutionStep: 2, form: 'dugtrio', level: 26, condition: false },
    ]
  },
  regional_variant: { type: 'alolan' },
  stats: {
    hp: 35,
    atk: 100,
    def: 50,
    spAtk: 50,
    spDef: 70,
    spd: 120,
  },
  type: ['ground'],
  catchRate: 6.5,
  experienceYield: 149,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 },
  ],
  abilities: [
    {name: 'sand veil', hidden: false },
    {name: 'arena trap', hidden: false },
    {name: 'sand force', hidden: true }
  ],
  height: 0.7,
  weight: 33.3,
  moves: [
    { name: 'sand tomb', level: 1 },
    { name: 'rototiller', level: 1 },
    { name: 'night slash', level: 1 },
    { name: 'tri attack', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'sand attack', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'sand tomb', level: -1 },
    { name: 'growl', level: 4 },
    { name: 'astonish', level: 7 },
    { name: 'mud-slap', level: 10 },
    { name: 'magnitude', level: 14 },
    { name: 'bulldoze', level: 18 },
    { name: 'sucker punch', level: 22 },
    { name: 'mud bomb', level: 25 },
    { name: 'earth power', level: 30 },
    { name: 'dig', level: 35 },
    { name: 'slash', level: 41 },
    { name: 'earthquake', level: 47 },
    { name: 'fissure', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: ['soft_sand'],
    guarantee: []
  }
};
