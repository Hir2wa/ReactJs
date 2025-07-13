import React, { useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault}>
        <label form="search"> Search-Item </label>
        <input
          id="search"
          placeholder="Search-Posts"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Nav;
