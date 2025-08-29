import React, { useState } from "react";

const ChangeColour = () => {
  const [color, setColor] = useState();
  return (
    <>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button>ChangeColour</button>)
    </>
  );
};

export default ChangeColour;
