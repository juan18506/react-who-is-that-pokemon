import React from "react";

import {useForm} from "../hooks";

interface Props {
  isLoading: boolean;
  onUserGuess: (guess: string) => void;
  onNewGame: () => void;
}

export const PokemonForm: React.VFC<Props> = ({isLoading, onUserGuess, onNewGame}) => {
  const {guess, handleInputChange, handleResetForm} = useForm();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onUserGuess(guess);
    handleResetForm();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="nes-input"
        name="guess"
        type="text"
        value={guess}
        onChange={handleInputChange}
      />
      <button
        className={`nes-btn ${!isLoading ? "is-primary" : "is-disabled"}`}
        disabled={isLoading}
        type="submit"
      >
        Guess
      </button>

      <button className="nes-btn is-secondary" type="button" onClick={onNewGame}>
        Play again
      </button>
    </form>
  );
};
