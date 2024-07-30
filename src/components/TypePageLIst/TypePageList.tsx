import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypeItem from "../TypeItem/TypeItem";
import "./TypePageList.css"
import Header from "../Header/Header";

export interface IPokemon {
    name: string;
    url: string;
  }
  
  export interface IPokemonTypeGroup {
    pokemon: {
      pokemon: IPokemon;
      slot: number;
    }[];
  }

const TypePageList = () => {
  const { types } = useParams<{ types?: string }>();
  const [pokemonTypeGroup, setPokemonTypeGroup] =
    useState<IPokemonTypeGroup | null>(null);
  useEffect(() => {
    if (types) {
      fetch(`https://pokeapi.co/api/v2/type/${types}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonTypeGroup(data);
        })
        .catch((err) => console.error("Error fetching Pokémon type data", err));
    }
  }, [types]);

  return (
    <>
     <Header/>
      <h1 className="type-text">{types}</h1>
      <div className="type-list">
        {pokemonTypeGroup?.pokemon?.map((entry) => (
          <TypeItem pokemon={entry.pokemon} key={entry.pokemon.name} />
        ))}
      </div>
    </>
  );
};

export default TypePageList;
