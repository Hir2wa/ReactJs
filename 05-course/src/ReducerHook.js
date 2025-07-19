import React, { useReducer } from "react";
import {ReactNode} from "react"
function reducer(state, action) {}
export const ReducerHook = () => {
  const [state, dipatch] = useReducer(reducer, initialState);
  type childrenType = {
    children = (num: number)=> ReactNode
  };
  const initialState = { count: 0 };
  return <div>ReducerHook</div>;
};
