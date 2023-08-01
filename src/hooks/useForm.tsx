import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [formState, setFormState] = useState<T>(initState);
  const handleFormState = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [name]: value });
  };
  return {
    formState,
    handleFormState,
    ...formState,
  };
};
