import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: [],
    search: "",
    empty: false,
    max: 12,
    height: window.innerHeight,
    message: "not at bottom"
  };

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState({
        message: "bottom reached"
      });
    } else {
      this.setState({
        message: "not a bottom"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let bookStore = [];
    let id = 0;
    this.getData(bookStore, id);
  };

  getData = (bookStore, id) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        this.state.search
      }&maxResults=${this.state.max}`
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
        } else {
          this.setState({
            empty: true
          });
        }
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
        <List books={this.state.books} empty={this.state.empty} />
      </>
    );
  }
}

export default App;
