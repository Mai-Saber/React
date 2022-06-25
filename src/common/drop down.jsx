import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { className, name, main, firstOption, secondOption, thirdOption } =
      this.props;
    return (
      <select className={className} name={name}>
        <option value={main}>{main}</option>
        <option value={firstOption}>{firstOption}</option>

        <option value={secondOption}>{secondOption}</option>

        <option value={thirdOption}>{thirdOption}</option>
      </select>
    );
  }
}

export default Dropdown;
