import { useState } from "react";

interface IUser {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setuser] = useState<IUser>();
  const login = () => {
    setuser({
      uid: "123",
      name: "Sebas",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usurio: useState</h3>
      <button className="btn btn-outline-primary mt-2" onClick={login}>
        Login
      </button>
      <pre className="mt-3">{JSON.stringify(user)}</pre>
    </div>
  );
};
