import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: []
  };
  render() {
    return (
      <>
        <Search />
        <List />
      </>
    );
  }
}

export default App;
