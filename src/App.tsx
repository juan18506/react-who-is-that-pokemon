import {FormEvent, useEffect, useState} from "react";

import Api from "./api";
import {Pokemon} from "./types";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isImageHidden, setIsImageHidden] = useState<Boolean>(true);

  useEffect(() => {
    Api.random().then((newPokemon) => {
      setPokemon(newPokemon);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsImageHidden(false);
  };

  return (
    <main>
      <h1>Who&apos;s that Pokemon?</h1>

      {!isLoading && (
        <img alt="A pokemon" className={isImageHidden ? "hidden" : ""} src={pokemon?.image} />
      )}

      <form onSubmit={handleSubmit}>
        <input className="nes-input" id="guess-field" type="text" />

        <button className="nes-btn is-primary" type="submit">
          Guess
        </button>
      </form>
    </main>
  );
}

export default App;
