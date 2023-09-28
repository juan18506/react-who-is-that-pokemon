import {useEffect, useState} from "react";

import Api from "../api";
import {Pokemon} from "../types";
import {getStorageData} from "../helpers";

import {useCounter} from "./";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const {counter: correctCounter, increment: correctIncrement} = useCounter(
    getStorageData("counters", "inc"),
  );
  const {counter: incorrectCounter, increment: incorrectIncrement} = useCounter(
    getStorageData("counters", "dec"),
  );

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify({correctCounter, incorrectCounter}));
  }, [correctCounter, incorrectCounter]);

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
      correctIncrement();
      setIsCorrectAnswer(true);
    } else {
      incorrectIncrement();
    }
  };

  return {
    pokemon,
    isLoading,
    isCorrectAnswer,
    counter: {
      correctCounter,
      incorrectCounter,
    },
    handleUserGuess,
    handleNewGame,
  };
};
