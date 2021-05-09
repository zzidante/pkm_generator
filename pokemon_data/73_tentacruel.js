module.exports = {
  name: 'tentacruel',
  pokedex: 73,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'tentacool', level: 0, condition: false },
      {  evolutionStep: 2, form: 'tentacruel', level: 30, condition: false },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 80,
    atk: 70,
    def: 65,
    spAtk: 80,
    spDef: 120,
    spd: 100,
  },
  type: ['water', 'poison'],
  catchRate: 7.8,
  experienceYield: 180,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spdef', value: 2 }
  ],
  abilities: [
    {name: 'clear body', hidden: false },
    {name: 'liquid booze', hidden: false },
    {name: 'rain dish', hidden: true }
  ],
  height: 1.6,
  weight: 55.0,
  moves: [
    { name: 'reflect type', level: 1 },
    { name: 'wring out', level: 1 },
    { name: 'poison sting', level: 1 },
    { name: 'supersonic', level: 1 },
    { name: 'constrict', level: 1 },
    { name: 'acid', level: 1 },
    { name: 'supersonic', level: 4 },
    { name: 'constrict', level: 7 },
    { name: 'acid', level: 10 },
    { name: 'toxic spikes', level: 13 },
    { name: 'water pulse', level: 16 },
    { name: 'wrap', level: 19 },
    { name: 'acid spray', level: 22 },
    { name: 'bubble beam', level: 25 },
    { name: 'barrier', level: 28 },
    { name: 'poison jab', level: 32 },
    { name: 'brine', level: 36 },
    { name: 'screech', level: 40 },
    { name: 'hex', level: 44 },
    { name: 'sludge wave', level: 48 },
    { name: 'hydro pump', level: 52 },
    { name: 'wring out', level: 56 },
  ],
  wild_items: {
    common: [],
    rare: ['poison_barb'],
    guarantee: []
  }
};
