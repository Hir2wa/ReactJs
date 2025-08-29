import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Features/user";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "Alain",
              age: "2s",
              email: "alainfabricehirwa@gmail.com",
            })
          )
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};

export default Login;
