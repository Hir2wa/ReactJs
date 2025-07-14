import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
function App() {
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
