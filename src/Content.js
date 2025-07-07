import React from "react";

const Content = () => {
  const handleNameChanges = () => {
    let name = ["Alain", "Hirwa", "Fabrice"];
    let init = Math.floor(Math.random() * 3);
    return name[init];
  };
  return (
    <main>
      <p>Hello {handleNameChanges()}</p>
    </main>
  );
};

export default Content;
