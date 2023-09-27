import {FormEvent} from "react";

import {useForm, usePokemon} from "./hooks";

const App = () => {
  const {pokemon, isLoading, isCorrectAnswer, handleGuess} = usePokemon();
  const {guess, handleInputChange, handleResetForm} = useForm();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleGuess(guess);
    handleResetForm();
  };

  return (
    <main>
      <h1>Who&apos;s that Pokemon?</h1>

      {!isLoading && (
        <img alt="A pokemon" className={!isCorrectAnswer ? "hidden" : ""} src={pokemon?.image} />
      )}

      <form onSubmit={handleFormSubmit}>
        <input
          className="nes-input"
          name="guess"
          type="text"
          value={guess}
          onChange={handleInputChange}
        />

        <button className="nes-btn is-primary" disabled={isLoading} type="submit">
          Guess
        </button>
      </form>
    </main>
  );
};

export default App;
