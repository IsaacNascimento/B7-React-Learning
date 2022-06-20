import React from "react";
import { useContagem } from "./reducers/contagem";

export const Reducer = () => {
  const [state, dispatch] = useContagem();
  return (
    <div className="p-5">
      <h1>Reducer Hook</h1>
      <h3>Contagem: {state.count}</h3>
      <button className="btn bg-black text-white p-2" onClick={() => dispatch({type: 'ADD'})}>Add+</button>
      <button className="btn bg-black text-white p-2" onClick={() => dispatch({type: 'DEL'})}>Del-</button>
      <button className="btn bg-black text-white p-2" onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
  );
};
