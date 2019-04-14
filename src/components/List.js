import React from "react";
import { Result } from "./Result";

const List = props => {
  const results = props.books.map(book => (
    <Result
      key={book.id}
      cover={book.cover}
      title={book.title}
      description={book.description}
    />
  ));
  return (
    <main className="list-wrapper">
      {props.empty ? (
        <div className="empty">Brak wyników</div>
      ) : (
        <ul className="list">{results}</ul>
      )}
    </main>
  );
};

export { List };
