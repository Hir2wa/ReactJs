import {
  Children,
  createContext,
  useReducer,
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
} from "react";

type StateType = {
  count: number;
  text: string;
};

const initState: StateType = { count: 0, text: "" };
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
const reducer = (state: StateType, action: ReducerAction): StateType => {
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

const useCounterContext = (initState: StateType) => {
  const [state, despatch] = useReducer(reducer, initState);
  const increment = useCallback(
    () => despatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrememt = () => despatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    despatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  return { state, increment, decrememt, handleTextInput };
};

type useCounterContextType = ReturnType<typeof useCounterContext>;
const initcontextState: useCounterContextType = {
  state: initState,
  increment: () => {},
  decrememt: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};
export const CounterContext =
  createContext<useCounterContextType>(initcontextState);
type CounterProviderProps = {
  children: ReactNode;
} & StateType;

export const CounterProvider = ({
  children,
  count,
  text,
}: CounterProviderProps): ReactElement => {
  const stateValue = useCounterContext({ count, text });
  return (
    <CounterContext.Provider value={stateValue}>
      {children}
    </CounterContext.Provider>
  );
};
