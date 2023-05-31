import { PokemonCardComponent } from '../PokemonCardComponent';

export const PokedexComponent = () => {

  /* const [pokemonList, setPokemonList] = useState<Pokemon[]>(
    [{
      id: 0,
      pokedex_id: 0,
      name: "",
      generation: "",
      abilities: [],
      exp: 0,
      hp: 0,
      atk: 0,
      sp_atk: 0,
      def: 0,
      sp_def: 0,
      speed: 0,
      types: [],
      isLegendary: false,
      sprite: "",
      color: "",
    }]
  );

  const getPokemons = (pokemons: string[]) => {
    pokemons.map((pokemon_name: string) => {
      let pokemon: Pokemon = {
        id: 0,
        pokedex_id: 0,
        name: "",
        generation: "",
        abilities: [],
        exp: 0,
        hp: 0,
        atk: 0,
        sp_atk: 0,
        def: 0,
        sp_def: 0,
        speed: 0,
        types: [],
        isLegendary: false,
        sprite: "",
        color: "",
      };

      getPokemonByName(pokemon_name)
        .then(response => {
          pokemon = response;
        })
      getComplementaryPokemonDataByName(pokemon)
        .then(response => {
          setPokemonList([...pokemonList, response]);
        })
    });    
  }

  useEffect(() => {
    getAllPokemons(20, 20)
    .then(response => {
      getPokemons(response);
    })
  }); */

  return (
      <section>
      <PokemonCardComponent
        id={10}
        pokedex_id= {3}
        name= {"teste"}
        generation= {"3"}
        abilities={[{ name: "teste", is_hidden: false }, { name: "teste", is_hidden: false }]}
        exp= {3}
        hp= {123}
        atk= {123}
        sp_atk= {123}
        def= {123}
        sp_def= {123}
        speed= {123}
        types={[{name: "teste"}, {name:"teste"}]}
        isLegendary= {false}
        sprite={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"}
        color= {"gray"}
      />
      </section>
  );
};