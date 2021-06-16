import React, { Component } from "react";
import axios from "axios";
import config from "./config/config.json";
import queryString from "query-string";
import SearchPage from "./searchpage";
import LeftPanelForm from "./formData";
class Books extends Component {
  state = {
    allBooks: [],
    page: 0,
    searchApi: "",
    languages: ["English", "French", "Hindi"],
    filtersData: ["Full Volume", "Free Google e-books", "Paid Google e-books"],
  };
  async componentDidMount() {
    let bookApi = config.bookApi;
    const { data: posts } = await axios.get(bookApi + this.props.match.param);
    this.setState({ allBooks: posts.items });
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      let bookApi = config.bookApi;
      const { data: posts } = await axios.get(
        bookApi + this.props.match.params.team
      );
      this.setState({ page: 1, allBooks: posts.items });
    }
  }
  addToParams(params, newParamName, newParamValue) {
    if (newParamValue) {
      params = params ? params + "&" : params + "?";
      params = params + newParamName + "=" + newParamValue;
    }
    return params;
  }
  makeLangRadioStructure(languages, language) {
    let langRadio = {
      languages: languages,
      selectedLang: language,
    };
    return langRadio;
  }
  makeFilterRadioStructure(filtersData, filters) {
    let filterRadio = {
      filtersData: filtersData,
      selectedFilter: filters,
    };
    return filterRadio;
  }
  handleOptionChange = (langRadio, filterRadio) => {
    this.setState({ searchApi: langRadio });
    let language = langRadio.selectedLang;
    let filters = langRadio.selectedLang;
  };
  render() {
    let { languages, filtersData } = this.state;
    let { language, filters } = queryString.parse(this.props.location.search);
    language = language ? language : "";
    filters = filters ? filters : "";
    let langRadio = this.makeLangRadioStructure(languages, language);
    let filterRadio = this.makeFilterRadioStructure(filtersData, filters);
    return (
      <div>
        {this.state.page === 0 ? (
          <SearchPage
            onOptionChange={this.handleOptionChange}
            langRadio={langRadio}
          />
        ) : (
          <div>
            <div className="row">
              <div className="col-3">
                <LeftPanelForm
                  langRadio={langRadio}
                  filterRadio={filterRadio}
                  onOptionChange={this.handleOptionChange}
                />
              </div>
              <div className="col-9">
                <div className="row">
                  {this.state.allBooks.map((item, index) => (
                    <div
                      className="col-2 text-center m-1"
                      style={{
                        backgroundColor: "green",
                        height: "300px",
                        width: "300px",
                      }}
                      key={index}
                    >
                      {" "}
                      <img
                        className="text-center"
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        alt="books"
                        width="100px"
                        height="130px"
                      />
                      <br />
                      <h6>{item.volumeInfo.title}</h6>
                      {item.volumeInfo.authors}
                      <br />
                      {item.volumeInfo.categories}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Books;
