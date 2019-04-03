import React from "react";

const Search = props => {
  return (
    <>
      <input type="text" placeholder="Podaj tytuł..." />
      <button onClick={props.click}>Szukaj</button>
    </>
  );
};

export default Search;
