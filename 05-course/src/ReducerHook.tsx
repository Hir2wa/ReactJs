import React, { useReducer, type ReactNode } from "react";

// ✅ Using const + union instead of enum
const REDUCER_ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
} as const;

type REDUCER_ACTION_TYPE =
  (typeof REDUCER_ACTION_TYPE)[keyof typeof REDUCER_ACTION_TYPE];

const initialState = { count: 0 };

function reducer(
  state: typeof initialState,
  action: { type: REDUCER_ACTION_TYPE }
) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

type childrenType = {
  children: (num: number) => ReactNode;
};

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        -
      </button>
    </div>
  );
};
