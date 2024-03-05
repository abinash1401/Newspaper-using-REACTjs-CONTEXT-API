import React from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import "./App.css";

function App() {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
      <Pagination />
    </>
  );
}

export default App;
