import React from "react";
import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Alain");
  const handleNameChanges = () => {
    let name = ["Alain", "Hirwa", "Fabrice"];
    let init = Math.floor(Math.random() * 3);
    setName(name[init]);
  };

  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    console.log("clicked me ");
  };
  const handleClick0 = () => {
    setCount((prev) => prev + 1);

    console.log(count);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  return (
    <main>
      <p> Hello {name}</p>
      {/* <p onDoubleClick={handleClick1}>Hello {handleNameChanges()}</p> */}
      <button onClick={handleNameChanges}>ChangeName</button>
      <button onClick={() => handleClick2("Alain")}>Add</button>
      <button onClick={handleClick0}>count</button>
      <button onClick={(e) => handleClick3(e)}>Add</button>
    </main>
  );
};

export default Content;
