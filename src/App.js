import React, { Component } from "react";
// import BoxList from "./BoxList";
import './App.css';

import TodoList from "./TodoList";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <BoxList /> */}
        <TodoList />
      </div>
    )
  }
};

export default App;
