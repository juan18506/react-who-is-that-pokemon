import {useState} from "react";

import Api from "../api";
import {Pokemon} from "../types";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const handleNewGame = (): void => {
    setIsLoading(true);
    setIsCorrectAnswer(false);

    Api.random().then((newPokemon) => {
      setPokemon(newPokemon);
      setIsLoading(false);
    });
  };

  const handleUserGuess = (guess: string): void => {
    guess = guess.toLowerCase().trim();

    if (guess === pokemon?.name) {
      alert("correct!");
      setIsCorrectAnswer(true);
    } else {
      alert("incorrect :(");
    }
  };

  return {
    pokemon,
    isLoading,
    isCorrectAnswer,
    handleUserGuess,
    handleNewGame,
  };
};
