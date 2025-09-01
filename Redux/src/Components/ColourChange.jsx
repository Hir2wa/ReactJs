import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeColour } from "../Features/Theme";

const ColourChange = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(ChangeColour(color))}>
        ChangeColour
      </button>
    </>
  );
};

export default ColourChange;
