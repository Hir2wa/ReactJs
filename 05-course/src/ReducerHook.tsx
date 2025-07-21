import React, { Children, useReducer, type ReactNode } from "react";

// ✅ Using const + union instead of enum

const initialState = { count: 0 };

function reducer() {}
const initState = { count: 0}
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
} 
 type ReducerAction  = {
  type: REDUCER_ACTION_TYPE
}

export const ReducerHook = () => {
  

  return (
  
  );
};
