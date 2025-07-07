import React from "react";

const Content = () => {
  const handleNameChanges = () => {
    let name = ["Alain", "Hirwa", "Fabrice"];
    let init = Math.floor(Math.random() * 3);
    return name[init];
  };

  const handleClick1 = () => {
    console.log("clicked me ");
  };
  const handleClick3 = (e) => {
    console.log(e);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  return (
    <main>
      <p>Hello {handleNameChanges()}</p>
      <button onClick={handleClick1}>Add</button>
      <button onClick={() => handleClick2("Alain")}>Add</button>
      <button onClick={(e) => handleClick3(e)}>Add</button>
    </main>
  );
};

export default Content;
