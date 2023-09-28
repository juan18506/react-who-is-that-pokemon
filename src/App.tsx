import {useEffect} from "react";

import {usePokemon} from "./hooks";
import {PokemonForm} from "./components";

const App = () => {
  const {pokemon, isLoading, isCorrectAnswer, counter, handleUserGuess, handleNewGame} = usePokemon();

  useEffect(() => {
    handleNewGame();
  }, []);

  return (
    <main>
      <h1 className="nes-text">Who&apos;s that Pokemon?</h1>

      {pokemon && (
        <img alt="A pokemon" className={!isCorrectAnswer ? "hidden" : ""} src={pokemon.image} />
      )}

      <PokemonForm isLoading={isLoading} onNewGame={handleNewGame} onUserGuess={handleUserGuess} />

      <section className="nes-container counters">
        <div>Correct guesses: {counter.correctCounter}</div>
        <div>Incorrect guesses: {counter.incorrectCounter}</div>
      </section>
    </main>
  );
};

export default App;
