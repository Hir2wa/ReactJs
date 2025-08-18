import React from "react";
import { Link, Outlet } from "react-router-dom";
const BookLayout = () => {
  return (
    <>
      <h1>These is the header</h1>

      <p>
        <Link to="/books/1"> Book 1 </Link>
      </p>
      <p>
        <Link to="/books/2"> Book 2 </Link>
      </p>
      <p>
        <Link to="/books/3"> Book 3 </Link>
      </p>
      <h1>these is the footer </h1>
      <Outlet context={{ hello: "helloword" }} />
    </>
  );
};

export default BookLayout;
