import React from "react";
import { UserContext } from "./App";
import { useContext } from "react";
export const ComponentD = () => {
  const user = useContext(UserContext);

  return <p>Hello {user}</p>;
};
