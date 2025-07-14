import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      <p> {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>-</button>
    </>
  );
};
