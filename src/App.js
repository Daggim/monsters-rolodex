import React, { Component } from "react;";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstine",
          id: "one",
        },
        {
          name: "Dracula",
          id: "two",
        },
        {
          name: "Zombi",
          id: "3",
        },
      ],
    };
  }

  render() {
    return (
      <div calssName="App">
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
