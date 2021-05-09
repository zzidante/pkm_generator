module.exports = {
  name: 'raichu',
  pokedex: 26,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'pichu', level: 0, condition: false },
      {  evolutionStep: 2, form: 'pikachu', level: 0, condition: 'high friendship' },
      {  evolutionStep: 3, form: 'raichu', level: 22, condition: 'thunder stone' },
    ]
  },
  regional_variant: { type: 'alolan' },
  stats: {
    hp: 60,
    atk: 90,
    def: 55,
    spAtk: 90,
    spDef: 80,
    spd: 110,
  },
  type: ['electric'],
  catchRate: 9.8,
  experienceYield: 218,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 3 }
  ],
  abilities: [
    {name: 'static', hidden: false },
    {name: 'lightning rod', hidden: true }
  ],
  height: 0.8,
  weight: 30.0,
  moves: [
    { name: 'thunder punch', level: -1 },
    { name: 'thunder punch', level: 1 },
    { name: 'encore', level: 1 },
    { name: 'fake out', level: 1 },
    { name: 'thunder shock', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'quick attack', level: 1 },
  ],
  wild_items: {
    common: ['oran_berry'],
    rare: [],
    guarantee: []
  } 
};
