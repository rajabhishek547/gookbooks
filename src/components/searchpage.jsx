import React, { Component } from "react";
class SearchPage extends Component {
  state = {
    searchResul: "",
  };
  handleChange = (e) => {
    const { currentTarget: input } = e;

    this.setState({ searchResul: input.value });
  };
  handleSeach = () => {
    this.props.onOptionChange(this.state.searchResul);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center p-4">
            <img src="https://i.ibb.co/YybzD4s/book.jpg" alt="book" />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="active-cyan-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => this.handleSeach()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
