import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";

const [counter, setCounter] = useState<number>(1);
function App(setCounter = { setCounter }) {
  return (
    <>
      <Heading title="Hello World" />
      <Section title="These is not my default title3">
        {" "}
        these is my section{" "}
      </Section>
    </>
  );
}

export default App;
