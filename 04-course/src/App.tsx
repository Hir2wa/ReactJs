import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";
import { Counter } from "./components/Counter";

const [counter, setCounter] = useState<number>(1);
function App() {
  return (
    <>
      <Heading title="Hello World" />
      <Section title="These is not my default title3">
        {" "}
        these is my section{" "}
      </Section>
      <Counter setCounter={setCounter}>{counter}</Counter>
    </>
  );
}

export default App;
