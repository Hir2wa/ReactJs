import React, { Children, useReducer, type ReactNode } from "react";

// ✅ Using const + union instead of enum

const initialState = { count: 0 };


const initState = { count: 0}
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
} 
 type ReducerAction  = {
  type: REDUCER_ACTION_TYPE
}

function reducer(state: typeof initState
) {}

export const ReducerHook = () => {
  

  return (
  
  );
};
