import React, { useReducer } from "react";

function reducer(state, action) {}
export const ReducerHook = () => {
  const [state, dipatch] = useReducer(reducer, initialState);
  //  these usReducer  act as the reducer method in the array prototype
  return <div>ReducerHook</div>;
};
