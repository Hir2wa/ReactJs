import React from "react";
import { useSelector } from "react-redux";
import colourChange from "./ChangeColour";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const Theme = useSelector((state) => state.Theme.value);
  return (
    <div style={{ color: Theme }}>
      <h1>Profile Page</h1>
      <p>Name {user.name}</p>
      <p>Age {user.age}</p>
      <p>Email {user.email}</p>
      <colourChange />
    </div>
  );
};

export default Profile;
