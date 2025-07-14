export const Counter = () => {
  return (
    <>
      <p> {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>-</button>
    </>
  );
};
