import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes, FaInfo } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%]).{8,24}$/;
const Register = () => {
  const errRef = useRef();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState();
  const [userFocus, setUserFocus] = useState();

  const [pwd, setPwd] = useState();
  const [validPwd, setValidPwd] = useState();
  const [pwdFocus, setPwdFocus] = useState();

  const [matchPwd, setMatchPwd] = useState();
  const [validMatch, setValidMatch] = useState();
  const [matchFocus, setMatchPwdFocus] = useState();

  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = userRegex.test(user);
    console.log(result);
    console.log(user);
    setUser(setValidName);
  }, []);

  return <div>Register</div>;
};

export default Register;
