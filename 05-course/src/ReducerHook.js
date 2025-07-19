import React, { useReducer } from "react";

function reducer(state, action) {}
export const ReducerHook = () => {
  const [state, dipatch] = useReducer(reducer, initialState);

  return <div>ReducerHook</div>;
};
