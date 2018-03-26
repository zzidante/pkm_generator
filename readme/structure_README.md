## Project Structure

This project is broken up into the following sections

  - Data
    - PokemonFolder
        - master require file to congregate each pokemon
        - pokemon data per pokemon
            - Notes:
                - Moves: evolutions denoted with a negative level indicate special conditions.
                    - (-1): Move is learned during evolution to that form
    - Move List
        - master require file to congregate each set of moves
        - move data per type

  - Helpers
      - helper functions to make logical tasks simpler
      
  - Data Transforms
      - Different commands to call in order to get diff
      `pretty` output from the data structures
