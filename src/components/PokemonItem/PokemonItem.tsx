import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IResult } from "../../IPokemon";
import { IPokemonData } from "../../IPokemonData";
import "./PokemonItem.css";

export interface IPokemonItemProps {
  pokemon: IResult;
}

const PokemonItem: React.FC<IPokemonItemProps> = (props) => {
  const [pokemonItem, setPokemonItem] = useState<IPokemonData>(null!);
  const id = pokemonItem?.id.toString().padStart(3, '0');

  useEffect(() => {
    fetch(`${props.pokemon.url}`)
      .then((res) => res.json())
      .then((data) => setPokemonItem(data))
      .catch((err) =>
        console.error("Error by fetching pokemon item data", err)
      );
  }, []);

  return (
    pokemonItem ?
    <Link to={`/${pokemonItem?.name}`}>
      <div className="pokemon-item">
        <img
          className="pokemon-image"
          src={pokemonItem?.sprites.front_default}
          alt="Pokemon image"
        />
        <div className="info-div">
        <p>#{id}</p>
        <p>{pokemonItem?.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}</p>
        </div>
      </div>
    </Link>
    : null
  );
};

export default PokemonItem;
