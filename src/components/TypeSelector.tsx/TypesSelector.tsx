import { useEffect, useState } from "react";
import { IResult } from "../../IPokemon";
import { Link } from "react-router-dom";
import "./TypeSelector.css";
import { typeColors } from "../DetailPokemon/DetailPokemon";

export interface IPokemonType {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

// https://pokeapi.co/api/v2/type/${idParams}

const TypeSelector = () => {

  const [pokemonTypeItem, setPokemonTypeItem] = useState<IPokemonType>(null!);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setPokemonTypeItem(data))
      .catch((err) =>
        console.error("Error by fetching pokemon item data", err)
      );
  }, []);

  return (
    <>
      <div className="type-wrap">
        <Link to="/">
          <img src="images/pokemon-logo.png" alt="" />
        </Link>
        <Link to="/">X</Link>
      </div>
      <h1 className="type-titel">Type</h1>
      <div className="type-div">
        {pokemonTypeItem?.results.map((type) => (
          <Link to={`/pokemon-type/${type.name}`}>
            <button
              className="type-button"
              key={type.name}
              style={{
                backgroundColor: typeColors[type.name],
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {type.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TypeSelector;
