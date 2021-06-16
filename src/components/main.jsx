import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Books from "./books";
import NavBar from "./navbar/Navbar";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route path="/books/:team" component={Books} />
            <Route path="/" component={Books} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
