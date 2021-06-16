import React, { Component } from "react";
class LeftPanelForm extends Component {
  handleChange = (e) => {
    const { currentTarget: input } = e;
    const { langRadio, filterRadio } = this.props;
    if (input.name === "selectedLang") {
      langRadio[input.name] = input.value;
      filterRadio[input.name] = input.value;
    }
    if (input.name === "selectedFilter") {
      filterRadio[input.name] = input.value;
    }
    this.props.onOptionChange(langRadio, filterRadio);
  };
  render() {
    const { langRadio, filterRadio } = this.props;
    return (
      <div>
        <div className="col-12 p-2">
          <div className="col-9">
            <form>
              <div className="border">Language</div>
              {langRadio.languages.map((item) => (
                <div key={item} className="form-check border">
                  <input
                    value={item}
                    onChange={this.handleChange}
                    id={item}
                    name="selectedLang"
                    checked={item === langRadio.selectedLang}
                    type="radio"
                    className="radio-check-input"
                  />
                  <label className="form-check-label" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
              <br />
              <div className="border">Filters</div>
              {filterRadio.filtersData.map((item) => (
                <div key={item} className="form-check border">
                  <input
                    value={item}
                    onChange={this.handleChange}
                    id={item}
                    name="selectedLang"
                    checked={item === filterRadio.selectedFilter}
                    type="radio"
                    className="radio-check-input"
                  />
                  <label className="form-check-label" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftPanelForm;
