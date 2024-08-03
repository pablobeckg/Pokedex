import { useEffect } from "react";
import {
  useLoadingContext,
  usePokemonContext,
} from "../../context/PokemonContext";
import "./LoadingPage.css"

const LoadingPage = () => {
  const { setLoading } = useLoadingContext();
  const { setPokemonData } = usePokemonContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results))
      .catch((error) => console.error("error by fetching pokemon data", error));
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="pokeball"></div>
      </div>
    </section>
  );
};

export default LoadingPage;
