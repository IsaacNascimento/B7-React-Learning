import React, { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

export const Reducer = () => {
  const initialState = { count: 0 };
  const reducer = (state: reducerState, action: reducerAction) => {
    switch (action.type) {
      case 'ADD':
        return { ...state, count: state.count + 1 };
        break;
      case 'DEL':
        return { ...state, count: state.count - 1 };
        break;
      case 'RESET':
        return { ...state };
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Hook Reducer!</h1>
      <div className="p-5">
        <h3>Contagem: {state.count}</h3>
        <button className='btn btn-blue bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded' onClick={() => dispatch({type: 'ADD'})}>Add+</button>
      </div>
    </>
  );
};
