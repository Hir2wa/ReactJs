import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <>
      <p>{count}</p>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>+</button> */}
      {/* <button onClick={() => setCount((prev) => prev - 1)}>-</button> */}
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "stop" : "resume"}
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default CountDown;
