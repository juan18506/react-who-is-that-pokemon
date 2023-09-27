import {usePokemon} from "./hooks";

const App = () => {
  const {pokemon, isLoading, isImageHidden, handleGuess} = usePokemon();

  return (
    <main>
      <h1>Who&apos;s that Pokemon?</h1>

      {!isLoading && (
        <img alt="A pokemon" className={isImageHidden ? "hidden" : ""} src={pokemon?.image} />
      )}

      <form onSubmit={handleGuess}>
        <input className="nes-input" id="guess-field" name="guess" type="text" />

        <button className="nes-btn is-primary" disabled={isLoading} type="submit">
          Guess
        </button>
      </form>
    </main>
  );
};

export default App;
