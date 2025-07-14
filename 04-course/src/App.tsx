import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";
import { Counter } from "./components/Counter";

function App() {
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      <Heading title=".." />
      <Section title="...">....</Section>
      <Counter setCounter={setCounter}>{counter}</Counter>
    </>
  );
}

export default App;
