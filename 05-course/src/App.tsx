import { useEffect, useState, useCallback } from "react";

function App() {
  interface user {
    id: number;
    userName: string;
  }
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("unmounted");

      clearInterval(interval);
    };
  }, []);
  return <p> {count}</p>;
}

export default App;
