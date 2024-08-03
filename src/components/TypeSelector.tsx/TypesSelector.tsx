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

const TypeSelector = () => {

  const [pokemonType, setPokemonType] = useState<IPokemonType>(null!);
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setPokemonType(data))
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
        {pokemonType?.results.map((type) => (
          <div key={type.name}>
 <Link to={`/pokemon-type/${type.name}`}>
            <button
              className="type-button"
              
              style={{
                backgroundColor: typeColors[type.name],
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </button>
          </Link>
          </div>
         
        ))}
      </div>
    </>
  );
};

export default TypeSelector;
