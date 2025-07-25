import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
import { ComponentA } from "./ComponentA";
function App() {
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      <Heading title=".." />
      <Section title="...">....</Section>
      <Counter setCounter={setCounter}>{counter}</Counter>
      <List
        items={["cofffe", "tocs", "milk"]}
        render={(item: string) => <span className="food"> {item}</span>}
      />
    </>
  );
}

export default App;
