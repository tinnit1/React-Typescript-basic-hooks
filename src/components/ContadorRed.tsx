import { useReducer } from "react";

const initialState = {
  counter: 0,
};

type ActionType =
  | {
      type: "increase";
    }
  | {
      type: "decrease";
    }
  | {
      type: "custom";
      payload: number;
    }
  | {
      type: "restart";
    };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "custom":
      return {
        ...state,
        counter: action.payload,
      };
    case "restart":
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
export const ContadorRed = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>Contafor: {counter}</h2>
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => dispatch({ type: "increase" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger me-2"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        custom
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart
      </button>
    </>
  );
};
