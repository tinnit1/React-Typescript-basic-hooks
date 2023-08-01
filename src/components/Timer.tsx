import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setseconds] = useState<number>(0);
  const ref = useRef<NodeJS.Timeout>();
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setseconds((s) => s + 1), miliseconds);
  }, [miliseconds]);
  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
