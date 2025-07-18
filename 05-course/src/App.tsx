import { useEffect, useState, useCallback, useMemo, useRef } from "react";

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
  // const inputRef = useRef<HTMLInputElement>(null);
  // console.log(inputRef.current?.value);
  // console.log(inputRef.current);

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
      <p> {count}</p>
      <button onClick={addOne}> {count1}</button>
      <p>{result}</p>
      <input type="text" />
    </>
  );
}

export default App;
