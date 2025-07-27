import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
import { ComponentD } from "./ComponentD";
import { createContext } from "react";
import { ComponentB } from "./ComponentB";
export const UserContext = createContext<String>("");
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
      <UserContext.Provider value={user}>
        <ComponentD />
        <ComponentB />
      </UserContext.Provider>
    </>
  );
}

export default App;
