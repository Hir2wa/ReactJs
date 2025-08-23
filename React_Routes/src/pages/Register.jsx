import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes, FaInfo } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Register = () => {
  const user = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const email = /^(?=.*[a-z])(?=.*[a-z])(?=.*[!@#%]).{8,24}$/;
  return <div>Register</div>;
};

export default Register;
