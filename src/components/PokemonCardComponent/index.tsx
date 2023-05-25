import usePokedexContext from "../../hooks/usePokedexContext";
import styles from "./index.module.css";
import Pokemon from "../../models/pokemon";
import { Type } from "../../models/type";

type PokemonCardComponentProps = {
	name: string;
	atk: number;
	def: number;
	types: Type[];
	sprite: string;
}

export const PokemonCardComponent = (pokemon: PokemonCardComponentProps) => {
  /* const { pokemonState, setPokemonState } = usePokedexContext(); */

	return (
		<article>
			
		</article>
	)
};
