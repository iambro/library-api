import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: [],
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let bookStore = [];
    this.getData(bookStore);
  };

  getData = bookStore => {
    let id = 0;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        this.state.search
      }`
    )
      .then(response => response.json())
      .then(data => {
        data.items.map(book =>
          bookStore.push({
            id: id++,
            cover: book.volumeInfo.hasOwnProperty("imageLinks")
              ? book.volumeInfo.imageLinks.thumbnail
              : "empty",
            title: book.volumeInfo.title,
            description: book.volumeInfo.hasOwnProperty("description")
              ? book.volumeInfo.description
              : "empty"
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
        <Search
          click={this.handleClick}
          change={this.handleChange}
          search={this.state.search}
        />
        <List books={this.state.books} />
      </>
    );
  }
}

export default App;
