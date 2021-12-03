import React, { Component } from "react";
import MustDoIT from "./components/MustDoIT";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    input: "",
    mustdo: [
      { id: 0, text: " 리액트 소개1" },
      { id: 1, text: " 리액트 소개2" },
      { id: 2, text: " 리액트 소개3" },
    ],
  };
  render() {
    const { input, mustdo, handleChange } = this.state;
    return (
      <>
        <Nav></Nav>
        <MustDoIT input={input} mustdo={mustdo} onChange={handleChange} />
      </>
    );
  }
}

export default App;
