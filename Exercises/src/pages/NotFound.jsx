import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/");
    }, 1000);
  }, []);
  return (
    <>
      <div>NotFound</div>
      {/* instead directing a user direct a user to these
      page outomatically you can use these  using useNavigator can directly
      put you to these like home page and these can work like in case of login
      page */}
    </>
  );
};

export default NotFound;
