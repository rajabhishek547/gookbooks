import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarCss.css";
class NavBar extends Component {
  state = {
    data: [
      "Harry Potter Books",
      "Books by Agatha Christie",
      "Books by Premchand",
      "Love Stories by Jane",
      "Biography on Lincoln",
    ],
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active dropdown dropbtn">
              Options
              <div className="dropdown-content">
                {this.state.data.map((p) => (
                  <Link className="nav-link" to={`/books/${p}`} key={p}>
                    {p}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
