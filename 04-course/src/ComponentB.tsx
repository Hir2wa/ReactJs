import React, { useContext } from "react";
import { UserContext } from "./App";

export const ComponentB = () => {
  const user = useContext(UserContext);
  return <div>Hello Again {user}</div>;
};
