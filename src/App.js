import React, { Component } from "react";
//import NotFound from "./components/notFound";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
