import { useEffect } from 'react';
import { pokemon_api } from '../../api/pokemon';
import usePokedexContext from '../../hooks/usePokedexContext';
import styles from './index.module.css';
import PokemonApi, { Stat, TypeApi } from '../../models/pokemonApi';
import Pokemon from '../../models/pokemon';
import { Type } from '../../models/type';

export const PokedexComponent = () => {

    const { pokemonState, setPokemonState } = usePokedexContext();

    const pokemonApiToPokemon = (pokemonApi: PokemonApi[]) => {
        pokemonApi.map((pokemonApi: PokemonApi) => { 
            let pokemon: Pokemon = {
                id: 0,
                name: '',
                generation: 0,
                abilities: [],
                exp: 0,
                hp: 0,
                atk: 0,
                sp_atk: 0,
                def: 0,
                sp_def: 0,
                speed: 0,
                types: [],
                isLegendaryOrMytical: false,
                sprite: ''
            };

            pokemon.id = pokemonApi.id;
            pokemon.name = pokemonApi.name;
            pokemon.generation = 0;

            for(let i = 0; i < pokemonApi.abilities.length; i++) {
                pokemon.abilities[i].name = pokemonApi.abilities[i].ability.name
                pokemon.abilities[i].is_hidden = pokemonApi.abilities[i].isHidden;
            }

            pokemon.exp = pokemonApi.baseExperience;
            pokemonApi.stats.map((stat: Stat) => {
                switch(stat.stat.name) {
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

            pokemonApi.types.map((type: TypeApi) => {
                let tipo: Type = {
                    name: type.type.name,
                }
                
                pokemon.types.push(tipo);
            });

            pokemon.isLegendaryOrMytical = false;

            pokemon.sprite = pokemonApi.sprites.frontDefault;

            setPokemonState((currentValue) => [...currentValue, pokemon])
        });
    }

    useEffect(() => {
        pokemon_api.get("/pokemon")
        .then((response) => {
            return response.data;
        }).then((data: PokemonApi[]) => {
            pokemonApiToPokemon(data)
        });
    }, []);

    return (
        <section>
            {pokemonState.map((pokemon: Pokemon) => (
                <PokemonCard/>
            ))}
        </section>
    );
};