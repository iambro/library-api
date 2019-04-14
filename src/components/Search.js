import React from "react";

const Search = props => {
  return (
    <header className="header">
      <form className="form" onSubmit={props.click}>
        <input
          className="form__input"
          type="text"
          placeholder="Podaj tytuł..."
          value={props.search}
          onChange={props.change}
        />
        <button className="form__button" type="submit">
          Szukaj
        </button>
      </form>
    </header>
  );
};

export { Search };
