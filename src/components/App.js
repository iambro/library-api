import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class App extends Component {
  state = {
    books: [
      {
        id: 0,
        cover:
          "http://books.google.com/books/content?id=_JlQAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72yZ7FroGLYwlmYhfmCKYoaT02VkiWtNsDSECDss-_6S_WHbrNexfOuAA-NWg19HrNReu9Ns30Cfyn28T1qzjwWauC1NSA7k8LjH-MAEAhNLANBZD3wTy6i2tk9CFzXqXg0xrHF&source=gbs_api",
        title: "Lord",
        description: "Za górami, za lasami"
      },
      {
        id: 1,
        cover:
          "http://books.google.com/books/content?id=_JlQAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72yZ7FroGLYwlmYhfmCKYoaT02VkiWtNsDSECDss-_6S_WHbrNexfOuAA-NWg19HrNReu9Ns30Cfyn28T1qzjwWauC1NSA7k8LjH-MAEAhNLANBZD3wTy6i2tk9CFzXqXg0xrHF&source=gbs_api",
        title: "Twarz",
        description: "Kibice Ruchu Chorzów"
      },
      {
        id: 2,
        cover:
          "http://books.google.com/books/content?id=_JlQAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72yZ7FroGLYwlmYhfmCKYoaT02VkiWtNsDSECDss-_6S_WHbrNexfOuAA-NWg19HrNReu9Ns30Cfyn28T1qzjwWauC1NSA7k8LjH-MAEAhNLANBZD3wTy6i2tk9CFzXqXg0xrHF&source=gbs_api",
        title: "Ogień",
        description: "Kibice Miedzi"
      }
    ]
  };

  handleClick = () => {
    this.getData();
  };

  getData = () => {};

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
