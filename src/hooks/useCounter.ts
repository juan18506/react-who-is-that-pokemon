import {useState} from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (value: number = 1): void => {
    setCounter((current) => current + value);
  };

  const decrement = (value: number = 1): void => {
    setCounter((current) => current - value);
  };

  const reset = (): void => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
