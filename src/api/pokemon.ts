import axios from "axios";
import Pokemon from "../models/pokemon";
import { Pokedex, Result } from "../models/pokedex";
import { Type } from "../models/type";

const pokemon_api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

/* type SimplePokemon = {
  id: number;
  name: string;
}

const getAllPokemons = async (limit = 0, offset = 0): Promise<SimplePokemon[]> => {

  let pokemons: SimplePokemon[];

  pokemon_api
    .get(`/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      toPokemonsNameArray(data)
    });

  const toPokemonsNameArray = (pokedex: any) => {
    pokedex.results.map((pokemon_name: Result) => {
      
      pokemons.push(pokemon_name.name);
    });
  };
  console.log(pokemons);
  return pokemons;
}

const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const pokemon: Pokemon = {
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

  pokemon_api
    .get(`/pokemon/${name}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      pokemonApiToPokemon(data.results);
    });

  const pokemonApiToPokemon = (pokemonApi: any) => {
      pokemon.id = pokemonApi.id;
      pokemon.name = pokemonApi.name;
      pokemonApi.abilities.map((ability: any) => {
        const newAbility = {
          name: ability.ability.name,
          is_hidden: ability.isHidden,
        };

        pokemon.abilities.push(newAbility);
      });

      pokemon.exp = pokemonApi.baseExperience;
      pokemonApi.stats.map((stat: any) => {
        switch (stat.stat.name) {
          case "hp":
            pokemon.hp = stat.baseStat;
            break;
          case "attack":
            pokemon.atk = stat.baseStat;
            break;
          case "defense":
            pokemon.def = stat.baseStat;
            break;
          case "special-attack":
            pokemon.sp_atk = stat.baseStat;
            break;
          case "special-defense":
            pokemon.sp_def = stat.baseStat;
            break;
          case "speed":
            pokemon.speed = stat.baseStat;
            break;
        }
      });

      pokemonApi.types.map((type: any) => {
        const tipo: Type = {
          name: type.type.name,
        };

        pokemon.types.push(tipo);
      });

      pokemon.sprite = pokemonApi.sprites.other.dream_world.front_default;
  };

  return pokemon; 
}

const getComplementaryPokemonDataByName = async (pokemon: Pokemon): Promise<Pokemon> => {

  pokemon_api
    .get(`/pokemon-species/${pokemon.name}`)
    .then((response) => {
      return response.data;
    })
    .then((data: PokemonSpecie) => {
      pokemonSpecieToPokemon(data);
    });

  const pokemonSpecieToPokemon = (pokemonSpecie: PokemonSpecie) => {
    pokemon.color = pokemonSpecie.color.name;
    pokemon.generation = pokemonSpecie.generation.name;    
    pokemon.isLegendary = pokemonSpecie.isLegendary;
    pokemon.pokedex_id = pokemonSpecie.pokedexNumbers[0].entryNumber
  };

  return pokemon;
}

export { getAllPokemons, getPokemonByName, getComplementaryPokemonDataByName }; */