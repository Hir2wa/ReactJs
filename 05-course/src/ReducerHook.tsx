import React, { Children, useReducer, type ReactNode } from "react";

// ✅ Using const + union instead of enum

const initialState = { count: 0 };

const initState = { count: 0 };
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

type childrenType = {
  children: (count: number) => ReactNode;
};
const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };

    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count + 1 };
    default:
      throw new Error("Error Encounted");
  }
};
const [state, despatch] = useReducer(reducer, initState);
const increment = () => despatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
const decrememt = () => despatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

export const ReducerHook = ({ children }: childrenType) => {
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrememt}>-</button>
      </div>
    </>
  );
};
