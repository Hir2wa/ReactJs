import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
import { ComponentA } from "./ComponentA";
import { createContext } from "react";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState("Alain");
  const [counter, setCounter] = useState<number>(1);
  return (
    <>
      {/* <Heading title=".." />
      <Section title="...">....</Section>
      <Counter setCounter={setCounter}>{counter}</Counter>
      <List
        items={["cofffe", "tocs", "milk"]}
        render={(item: string) => <span className="food"> {item}</span>}
      /> */}
      <UserContext.Provider value={user}></UserContext.Provider>
    </>
  );
}

export default App;
