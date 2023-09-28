import {useEffect} from "react";

import {usePokemon} from "./hooks";
import {PokemonForm} from "./components";

const App = () => {
  const {pokemon, isLoading, isCorrectAnswer, handleUserGuess, handleNewGame} = usePokemon();

  useEffect(() => {
    handleNewGame();
  }, []);

  return (
    <main>
      <h1>Who&apos;s that Pokemon?</h1>

      {pokemon && (
        <img alt="A pokemon" className={!isCorrectAnswer ? "hidden" : ""} src={pokemon.image} />
      )}

      <PokemonForm isLoading={isLoading} onNewGame={handleNewGame} onUserGuess={handleUserGuess} />
    </main>
  );
};

export default App;
