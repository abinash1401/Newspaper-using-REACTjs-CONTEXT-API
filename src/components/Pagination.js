import React from "react";
import { useGlobalContext } from "../context/Context";

function Pagination() {

  const {page, nbPages, getPrevPage, getNextPage, isLoading} = useGlobalContext();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
}

export default Pagination;
