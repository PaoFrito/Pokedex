import { useContext } from "react";
import { PokemonCardContextProps } from "../../contexts/pokemonCard";
import PokemonCardContext from "../../contexts/pokemonCard";

const usePokemonCardContext = (): PokemonCardContextProps => {
    const pokemonCardContext = useContext<PokemonCardContextProps>(PokemonCardContext);
    return pokemonCardContext;
}

export default usePokemonCardContext;