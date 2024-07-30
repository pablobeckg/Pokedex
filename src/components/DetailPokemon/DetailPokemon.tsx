import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonData, IType } from "../../IPokemonData";
import "./DetailPokemon.css";
import Loading from "../Loading/Loading";

export const typeColors: { [key: string]: string } = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  unknown: "black",
  stellar: "gray"
};

const DetailPokemon = () => {
  const [detailPokemon, setDetailPokemon] = useState<IPokemonData | null>(null);
  const { pokemon } = useParams<{ pokemon?: string }>();
  const id = detailPokemon?.id.toString().padStart(3, "0");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => setDetailPokemon(data))
      .catch((err) =>
        console.error("Error by fetching pokemon item data", err)
      );
  }, [pokemon]);

 

  return (
    <div className="detail-pokemon">
      <div className="background-pokemon">
        <img
          src={detailPokemon?.sprites.front_default}
          alt={detailPokemon?.name}
        />
      </div>
      <h1>
        #{id} {detailPokemon?.name}
      </h1>
      <div className="type-container">
        { detailPokemon ? (detailPokemon?.types.map((typeInfo: IType) => (
          <div
            key={typeInfo.slot}
            style={{
              backgroundColor: typeColors[typeInfo.type.name],
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {typeInfo.type.name.toLocaleUpperCase()}
          </div>
        ))) : (<Loading/>)}
      </div>
    </div>
  );
};

export default DetailPokemon;


