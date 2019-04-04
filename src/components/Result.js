import React from "react";

const Result = props => {
  return (
    <li className="list__result">
      <img
        className="list__cover"
        src={
          props.cover !== "empty" ? props.cover : require("./IMG/nocover.png")
        }
        alt={`Okładka ${props.title}`}
      />
      <section className="list_textBox">
        <label className="list__label">Tytuł:</label>
        <p className="list__title">{props.title}</p>
      </section>
      <section className="list_textBox">
        <label className="list__label">Opis:</label>
        <p className="list__description">
          {props.description !== "empty" ? props.description.substring(0, 50)+'...' : "Brak"}
        </p>
      </section>
    </li>
  );
};

export default Result;
