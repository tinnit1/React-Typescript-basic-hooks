// import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

export const CustomForm = () => {
  const { formState, handleFormState, name, age, email } = useForm<FormData>({
    email: "hello@hi.com",
    name: "juanse",
    age: 31,
  });
  //   const { age, email, name } = formState;
  //   const [formState, setFormState] = useState({ email: "", name: "" });
  //   const handleFormState = ({
  //     target: { name, value },
  //   }: ChangeEvent<HTMLInputElement>) => {
  //     setFormState({ ...formState, [name]: value });
  //   };
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleFormState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleFormState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={handleFormState}
        />
      </div>
      <pre>{JSON.stringify(formState)}</pre>
    </form>
  );
};
