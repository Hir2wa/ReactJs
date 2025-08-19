import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
const BookLayout = () => {
  const [number, setNumber] = useState("");
  const [searchParm, setSearchParm] = useSearchParams({ n: 3 });
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
        <Link to={`books/${number}`}> Book {number}</Link>
      </p>
      <p>
        <Link to="/books/3"> Book 3 </Link>
      </p>
      <h1>these is the footer </h1>
      <Outlet context={{ hello: "helloword" }} />
      <input type="number" onChange={(e) => e.target.value} />
    </>
  );
};

export default BookLayout;
