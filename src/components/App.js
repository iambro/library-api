import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: [],
    search: "",
    empty: false,
    updateStart: 12,
    max: 12
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let bookStore = [];
    let id = 0;
    const didUpdate = false;
    this.getData(bookStore, id, didUpdate);
    this.setState({
      updateStart: 12
    })
  };

  handleUpdate = () => {
    let bookStore = this.state.books;
    let id = this.state.updateStart;
    const didUpdate = true;
    this.getData(bookStore, id, didUpdate);
    this.setState({
      updateStart: id + 12
    });
  };

  getData = (bookStore, id, didUpdate) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        this.state.search
      }&startIndex=${id}&maxResults=${this.state.max}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.hasOwnProperty("items")) {
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
            books: bookStore,
            empty: false
          });
        } else if (didUpdate === true) {
          return null;
        } else {
          this.setState({
            empty: true
          });
        }
      });
  };

  handleScroll = () => {
    const wrappedElement = document.getElementById("root");
    if (wrappedElement.getBoundingClientRect().bottom <= window.innerHeight) {
      this.handleUpdate();
      document.removeEventListener("scroll", this.handleScroll);
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <Search
          click={this.handleClick}
          change={this.handleChange}
          search={this.state.search}
        />
        <List books={this.state.books} empty={this.state.empty} />
      </>
    );
  }
}

export default App;
