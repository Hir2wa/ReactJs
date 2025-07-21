import { createContext, type ReactNode } from "react";

const initState = { count: 0, text: "" };
type StateType = {
  count: number;
  text: string;
};
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
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
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("Error Encounted");
  }
};
