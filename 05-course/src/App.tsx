import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { ReducerHook } from "./ReducerHook";
import { CounterProvider } from "./context/CounterContext";
import initState from "./context/CounterContext";

function App() {
  interface user {
    id: number;
    userName: string;
  }
  type fic = (n: number) => number;
  const fibFunc: fic = (n) => {
    if (n < 2) return n;
    return fibFunc(n - 1) + fibFunc(n - 2);
  };
  const myNum = 37;
  const result = useMemo(() => fibFunc(myNum), [myNum]);
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const inputReff = useRef<HTMLInputElement>(null);
  console.log(inputReff.current?.value);
  console.log(inputReff.current);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("unmounted");

      clearInterval(interval);
    };
  }, []);
  const addOne = useCallback(() => setCount1((prev) => prev + 1), []);
  return (
    <>
      {/* <CounterProvider count = {initState.count} text = {initState.state}>
        <count>{(num: number) = <>Current Count {num}</>}</count>
      </CounterProvider> */}

      <p> {count}</p>
      <button onClick={addOne}> {count1}</button>
      <p>{result}</p>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <ReducerHook>
        {(count) => <span>Current count: {count}</span>}
      </ReducerHook>
    </>
  );
}

export default App;
