import React, { use } from "react";
import { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes, FaInfo } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%]).{8,24}$/;
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
  }, [user]);

  useEffect(() => {
    const result = pwdRegex.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setMatchPwd(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg} aria-live = 'assertive'
      </p>
      <form action="">
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          ref={useRef}
          outoComplet="off"
          onChange={(e) => setUser(e.target.value)
          required
          onBlur={()=>setUserFocus(false)}
          onFocus={()=>setUserFocus(false)}
          aria-invalid ={validName ? "true" : "false"}
          }
        />
      </form>
    </section>
  );
};

export default Register;
