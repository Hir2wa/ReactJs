import { useEffect, useState, useCallback } from "react";

function App() {
  interface user {
    id: number;
    userName: string;
  }
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
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
    </>
  );
}

export default App;
