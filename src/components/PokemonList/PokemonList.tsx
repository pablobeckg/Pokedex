import { usePokemonContext } from "../../context/PokemonContext";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css"

const PokemonList = () => {
  const { filteredData } = usePokemonContext();

  return (
    <div className="pokemon-list">
      {filteredData?.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
