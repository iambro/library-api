import React from "react";

const Result = (props) => {
  return (
      <li>
          <img src={props.cover} alt={`Okładka ${props.title}`}/>
          <p>Tytuł: {props.title}</p>
          <p>Opis: {props.description}</p>
      </li>
    
  );
};

export default Result;
