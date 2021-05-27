
import { GeneratePokemon } from '../pokemon/generate_pokemon';
import { PokemonData } from '../../pokemon_data/00_pokemon_list';
import { GetRandomMoves } from '../moves/get_random_moves';

function _generateNewPokemonSimple(pokemon = process.argv.slice(2)) {
  const iChooseYou = PokemonData[pokemon[0]];
  const lvl = pokemon[1];
  const statsInput = [
    pokemon[0],
    lvl,
    iChooseYou.stats.hp,
    iChooseYou.stats.atk,
    iChooseYou.stats.def,
    iChooseYou.stats.spAtk,
    iChooseYou.stats.spDef,
    iChooseYou.stats.spd,
  ];

  const generatedRandomStats = GeneratePokemon.interface(statsInput);
  const pokemonWithMoves = GetRandomMoves.interface(generatedRandomStats, iChooseYou.moves);

  const {
    name,
    level,
    nature,
    totalHitPoints,
    totalAttack,
    totalDefence,
    totalSpecialAttack,
    totalSpecialDefence,
    totalSpeed,
    test
  } = pokemonWithMoves;

  console.log({ name, level, nature, totalHitPoints, totalAttack, totalDefence, totalSpecialAttack, totalSpecialDefence, totalSpeed, test });
}

export function generateNewPokemonSimple() {
  return _generateNewPokemonSimple;
}
