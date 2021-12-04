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
  handleChange = (e) => {
    this.setState({
      input: e.target.input,
    });
  };
  handleCreate = () => {
    const { input, mustdo } = this.state;
    this.setState({
      input: "",
      mustdo: mustdo.concat({
        id: this.id++,
        text: input,
      }),
    });
  };
  render() {
    const { input, mustdo, handleChange, handleCreate } = this.state;
    return (
      <>
        <Nav></Nav>
        <MustDoIT
          value={input}
          mustdo={mustdo}
          onChange={handleChange}
          onCreate={handleCreate}
          key={mustdo.id}
        />
      </>
    );
  }
}

export default App;
