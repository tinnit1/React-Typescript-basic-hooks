import { useState } from "react";
import { Timer } from "./Timer";

export const TimerFather = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  return (
    <>
      <span>Milisecons {milliseconds}</span>
      <br />
      <button
        className="btn btn-outline-success my-2 me-2"
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success my-2"
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <Timer miliseconds={milliseconds} />
    </>
  );
};
