import { createContext, useContext } from "react";
import { IResult } from "../IPokemon";

interface IPokemonContext {
  pokemonData: IResult[] | null;
  filteredData: IResult[] | null;
  setFilteredData: React.Dispatch<React.SetStateAction<IResult[] | null>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonContext = createContext<IPokemonContext>(null!);

export const usePokemonContext = () => useContext(PokemonContext);
