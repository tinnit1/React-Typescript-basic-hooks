import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimerFather } from "./components/TimerFather";
import { ContadorRed } from "./components/ContadorRed";
import { CustomForm } from "./components/CustomForm";
import { CustomForm2 } from "./components/CustomForm2";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerFather />
      <h2>useReducer</h2>
      <hr />
      <ContadorRed />
      <h2>customHooks</h2>
      <hr />
      <CustomForm />
      <br />
      <CustomForm2 />
      <br />
      <br />
    </>
  );
}

export default App;
