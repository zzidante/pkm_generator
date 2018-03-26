module.exports = {
  name: 'cloyster',
  pokedex: 91,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'shellder', level: 0, condition: false },
      {  evolutionStep: 2, form: 'cloyster', level: false, condition: 'water stone' },
    ]
  },            
  stats: {
    hp: 50,
    atk: 95,
    def: 180,
    spAtk: 85,
    spDef: 45,
    spd: 70,
  },
  type: ['water', 'ice'],
  catchRate: 7.8,
  experienceYield: 184,
  genderRatio: [50, 50],
  evYield: [
    { type: 'def', value: 2}
  ],
  abilities: [
    {name: 'shell armor', hidden: false },
    {name: 'skill link', hidden: false },    
    {name: 'overcoat', hidden: true }
  ],
  height: 1.5,
  weight: 132.5,
  moves: [
    { name: 'hydro pump', level: 1 },
    { name: 'shell smash', level: 1 },
    { name: 'toxic spikes', level: 1 },
    { name: 'withdraw', level:  1 },
    { name: 'supersonic', level: 1 },
    { name: 'protect', level: 1 },
    { name: 'aurora beam', level: 1 },
    { name: 'spike cannon', level: 13 },
    { name: 'spikes', level: 28 },
    { name: 'icicle crash', level: 50 },
  ],
};
