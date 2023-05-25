import React, { createContext, useState } from "react";
import Pokemon from "../../models/pokemon";

export type PokedexContextProps = {
    pokemonState: Pokemon[];
    setPokemonState: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

type PokedexContextProviderProps = {
    children: React.ReactNode;
}

const DEFAULT_VALUES = {
    pokemonState: [],
    setPokemonState: () => {[]},
}

const PokedexContext = createContext<PokedexContextProps>(DEFAULT_VALUES)

const PokedexContextProvider = ({ children }: PokedexContextProviderProps) => {
    const [pokemonState, setPokemonState] = useState<Pokemon[]>([]);

    return (
        <PokedexContext.Provider value={{
            pokemonState,
            setPokemonState,
        }}>
            {children}
        </PokedexContext.Provider>
    );
}

export default PokedexContext;
export { PokedexContextProvider };