import { useContext } from "react";
import PokedexContext, { PokedexContextProps } from "../../contexts/pokedex";

const usePokedexContext = (): PokedexContextProps => {
    const pokedexContext = useContext<PokedexContextProps>(PokedexContext);
    return pokedexContext;
}

export default usePokedexContext;