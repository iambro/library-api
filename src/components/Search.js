import React from "react";

const Search = props => {
  return (
    <>
      <input type="text" placeholder="Podaj tytuł..." value={props.search} onChange={props.change}/>
      <button onClick={props.click}>Szukaj</button>
    </>
  );
};

export default Search;
