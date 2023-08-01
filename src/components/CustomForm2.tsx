import { useForm } from "../hooks/useForm";

export const CustomForm2 = () => {
  const { formState, handleFormState, postaCode, city } = useForm({
    postaCode: "ABC",
    city: "Ottawa",
  });
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          name="postalCode"
          value={postaCode}
          onChange={handleFormState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={handleFormState}
        />
      </div>
      <pre>{JSON.stringify(formState)}</pre>
    </form>
  );
};
