import React from "react";

const SearchItem = () => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault;
      }}
    >
      <label htmlFor="search">search</label>
      <input
        id="search"
        type="text"
        placeHolder="Search-Items"
        role="searchLabel"
      />
    </form>
  );
};

export default SearchItem;
