import { createContext, useContext } from "react";
import { IResult } from "../IPokemon";

interface IPokemonContext {
  pokemonData: IResult[] | null;
  setPokemonData: React.Dispatch<React.SetStateAction<IResult[] | null>>;
  filteredData: IResult[] | null;
  setFilteredData: React.Dispatch<React.SetStateAction<IResult[] | null>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonContext = createContext<IPokemonContext>(null!);

export const usePokemonContext = () => useContext(PokemonContext);

interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<ILoading>({ 
  loading: true, 
  setLoading: () => {} 
});
export const useLoadingContext = () => useContext(LoadingContext);
