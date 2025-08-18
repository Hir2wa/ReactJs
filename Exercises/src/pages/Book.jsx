import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  console.log(id);

  return (
    <>
      <p>
        Book {id} {obj.hello}
      </p>
    </>
  );
};

export default Book;
