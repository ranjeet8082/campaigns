import React from "react";

function Search({ searchText, setSearchText, onFilter }) {
  return (
    <form onSubmit={onFilter} className="example">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search.."
        name="search2"
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Search;
