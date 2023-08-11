import React from "react";
import "./Search.css";

function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="search">
      <input type="search" placeholder="Search Here" onChange={searchChange} />
    </div>
  );
}

export default SearchBox;
