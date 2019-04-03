import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: []
  };

  handleClick = () => {
    let bookStore = [];
    this.getData(bookStore);
  };

  getData = bookStore => {
    let id = 0;
    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:lord")
      .then(response => response.json())
      .then(data => {
        data.items.map(book =>
          bookStore.push({
            id: id++,
            cover: book.volumeInfo.hasOwnProperty("imageLinks")
              ? book.volumeInfo.imageLinks.thumbnail
              : "Brak okładki",
            title: book.volumeInfo.title,
            description: book.volumeInfo.hasOwnProperty("description")
              ? book.volumeInfo.description
              : "Brak opisu"
          })
        );
        this.setState({
          books: bookStore
        });
      });
  };

  render() {
    return (
      <>
        <Search click={this.handleClick} />
        <List books={this.state.books} />
      </>
    );
  }
}

export default App;
