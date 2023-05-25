import React, { createContext, useState } from "react";
import Pokemon from "../../models/pokemon";

export type PokemonCardContextProps = {
    pokemonState: Pokemon;
    setPokemonState: React.Dispatch<React.SetStateAction<Pokemon>>;
}

type PokemonCardContextProviderProps = {
    children: React.ReactNode;
}

const DEFAULT_VALUES = {
    pokemonState: {} as Pokemon,
    setPokemonState: () => undefined,
}

const PokemonCardContext = createContext<PokemonCardContextProps>(DEFAULT_VALUES)

const PokemonCardContextProvider = ({ children }: PokemonCardContextProviderProps) => {
    const [pokemonState, setPokemonState] = useState<Pokemon>({} as Pokemon);

    return (
        <PokemonCardContext.Provider value={{
            pokemonState,
            setPokemonState,
        }}>
            {children}
        </PokemonCardContext.Provider>
    );
}

export default PokemonCardContext;
export { PokemonCardContextProvider };