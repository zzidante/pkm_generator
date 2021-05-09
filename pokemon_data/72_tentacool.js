module.exports = {
  name: 'tentacool',
  pokedex: 72,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'tentacool', level: 0, condition: false },
      {  evolutionStep: 2, form: 'tentacruel', level: 30, condition: false },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 40,
    atk: 40,
    def: 35,
    spAtk: 50,
    spDef: 100,
    spd: 70,
  },
  type: ['water', 'poison'],
  catchRate: 24.8,
  experienceYield: 67,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spdef', value: 1 }
  ],
  abilities: [
    {name: 'clear body', hidden: false },
    {name: 'liquid booze', hidden: false },
    {name: 'rain dish', hidden: true }
  ],
  height: 0.9,
  weight: 45.5,
  moves: [
    { name: 'poison sting', level: 1 },
    { name: 'supersonic', level: 4 },
    { name: 'constrict', level: 7 },
    { name: 'acid', level: 10 },
    { name: 'toxic spikes', level: 13 },
    { name: 'water pulse', level: 16 },
    { name: 'wrap', level: 19 },
    { name: 'acid spray', level: 22 },
    { name: 'bubble beam', level: 25 },
    { name: 'barrier', level: 28 },
    { name: 'poison jab', level: 31 },
    { name: 'brine', level: 34 },
    { name: 'screech', level: 37 },
    { name: 'hex', level: 40 },
    { name: 'sludge wave', level: 43 },
    { name: 'hydro pump', level: 46 },
    { name: 'wring out', level: 49 },
  ],
  wild_items: {
    common: [],
    rare: ['poison_barb'],
    guarantee: []
  }
};
