import {ChangeEvent, useState} from "react";

const form = {
  guess: "",
};

export const useForm = (initialForm = form) => {
  const [formState, setFormState] = useState(initialForm);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleResetForm = (): void => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm,
  };
};
