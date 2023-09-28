import {useState} from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (value: number = 1): void => {
    setCounter((current) => current + value);
  };

  return {
    counter,
    increment,
  };
};
