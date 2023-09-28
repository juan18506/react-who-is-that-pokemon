import React, {useRef} from "react";

interface Props {
  isLoading: boolean;
  onUserGuess: (guess: string) => void;
  onNewGame: () => void;
}

export const PokemonForm: React.VFC<Props> = ({isLoading, onUserGuess, onNewGame}) => {
  const userInput = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userInput.current) return;
    onUserGuess(userInput.current.value);
    userInput.current.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input ref={userInput} className="nes-input" name="guess" type="text" />

      <div className="buttons">
        <button
          className={`nes-btn ${!isLoading ? "is-primary" : "is-disabled"}`}
          disabled={isLoading}
          type="submit"
        >
          Guess
        </button>

        <button className="nes-btn" type="button" onClick={onNewGame}>
          Play again
        </button>
      </div>
    </form>
  );
};
