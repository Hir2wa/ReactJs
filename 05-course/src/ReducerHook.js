import React, { useReducer } from "react";

function reducer(state, action) {}
export const ReducerHook = () => {
  const [state, dipatch] = useReducer(reducer, initialState);
  const initialState = { count: 0 };
  return <div>ReducerHook</div>;
};
