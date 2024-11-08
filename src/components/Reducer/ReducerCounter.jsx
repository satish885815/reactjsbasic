import React, { useReducer } from "react";

const initialValue = 0;

function reducer(state, action) {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return null;
  }
}
function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("Increment")}>Incrememnt</button>
      <button onClick={() => dispatch("Decrement")}>Decrememnt</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
