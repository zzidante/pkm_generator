# Dungeons and Dragonairs Pokemon Stat Builder
www.dungeonsanddragonairs.tumblr.com for more details.

Not for profit, fan fun rpg game based on the Pokemon world. Explores storytelling avenues of the console world.

These are purely CLI scripts (with intentions to expand to a full web app) which facilitate a DM to generate instances of pokemon for use in the tabletop game. It encompasses an MVP of data pulling & parsing which, if left to the user, is extremely tedious.

# Instructions
## Pull this package
## `npm install`
### There are 3 seperates scripts that can be run via NPM scripts.
`npm run get_data <pokemonName>`: this pulls the pokemon in question from the web API into a JSON file located at `calculators/pull_pokemon_data/raw_responses`

`npm run convert_to_tabletop <pokemonName>`: this parses the pokemon in question from the web API response we have stored (from `get_data` above), into a tabletop parsed version of base data for the game. Currently only a proof of concept and so it only logs to the console (as the conversion functionality needed to statically store the data for use by the next script is incomplete and to officially register a pokemon still requires some human intervention). This is the functionality next slated for work but will essentially be the glue between `get_data` and the next script `generate_pokemon_tabletop_instance` and will allow for a full pipeline of pokemon "on request"
whenever we don't have the information available.

`npm run generate_pokemon_tabletop_instance <pokemonName> <pokemonLevel>`: this generates an instance of the tabletop pokemon utlizing the convertion calculations built in the tabletop game & stores it in a JSON file located at `calculators/generate/generated_pokemon/<pokemonFileName>.json`. The data this reads from is statically stored in `pokemon_data/<filename>.js`. Supported pokemon for conversion
can be seen in `pokemon_data/00_pokemon_list.js`.

# Sample
`npm run get_data pikachu`
`npm run convert_to_tabletop pikachu`
`npm run convert_to_tabletop pikachu 40`

## There are also some mocha/chai/sinon unit tests which can be run. Most of these cover core calculator-like functions. There are two methods of dependency injection testing in here, the most current one uses the `default` pattern shown.
`npm run test`

## Other Pokemon which exist that I can suggest
- Bulbasaur, Squirtle, Charmander