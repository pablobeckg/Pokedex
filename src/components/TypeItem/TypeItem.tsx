import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPokemonData } from "../../IPokemonData";
import { IPokemon } from "../TypePageList/TypePageList";

export interface ITypeItemProps {
  pokemon: IPokemon;
}

const TypeItem: React.FC<ITypeItemProps> = (props) => {
  const [pokemonItem, setPokemonItem] = useState<IPokemonData | null>(null);
  const id = pokemonItem?.id.toString().padStart(3, "0");

  useEffect(() => {
    fetch(props.pokemon.url)
      .then((res) => res.json())
      .then((data) => setPokemonItem(data))
      .catch((err) => console.error("Error fetching pokemon item data", err));
  }, [props.pokemon.url]);

  if (!pokemonItem || pokemonItem.id > 150) {
    return null;
  }

  return (
    <Link to={`/${pokemonItem.name}`}>
      <div className="pokemon-item">
        <img
          className="pokemon-image"
          src={pokemonItem.sprites.front_default}
          alt={`${pokemonItem.name} image`}
        />
        <div className="info-div">
          <p>#{id}</p>
          <p>{pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default TypeItem;
