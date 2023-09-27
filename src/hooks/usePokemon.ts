import {useEffect, useState} from "react";

import Api from "../api";
import {Pokemon} from "../types";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  useEffect(() => {
    Api.random().then((newPokemon) => {
      setPokemon(newPokemon);
      setIsLoading(false);
    });
  }, []);

  const handleGuess = (guess: string): void => {
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
    handleGuess,
  };
};
