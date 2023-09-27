import {FormEvent, useEffect, useState} from "react";

import Api from "../api";
import {Pokemon} from "../types";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isImageHidden, setIsImageHidden] = useState<boolean>(true);

  useEffect(() => {
    Api.random().then((newPokemon) => {
      setPokemon(newPokemon);
      setIsLoading(false);
    });
  }, []);

  const handleGuess = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const {guess} = Object.fromEntries(new FormData(event.currentTarget));

    if (guess === pokemon?.name) {
      alert("correct!");
      setIsImageHidden(false);
    } else {
      alert("incorrect :(");
    }
  };

  return {
    pokemon,
    isLoading,
    isImageHidden,
    handleGuess,
  };
};
