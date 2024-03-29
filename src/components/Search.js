import React from "react";
import { useGlobalContext } from "../context/Context";
function Search() {
  const {query, searchPost} = useGlobalContext();
  return (
    <>
      <h1>Tech News Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder="search"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default Search;
