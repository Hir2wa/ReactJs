import React from "react";
import { useParams } from "react-router-dom";
const Book = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <p> Book {id}</p>
    </>
  );
};

export default Book;
