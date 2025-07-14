import type { ReactNode } from "react";

type CounterProp = {
  children: ReactNode;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
export const Counter = ({ children, setCounter }: CounterProp) => {
  return (
    <>
      <p> {children}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>-</button>
    </>
  );
};
