import React, { Component } from "react";

class Image extends Component {
  state = {
    url: "../../chart 2.png",
  };
  render() {
    return (
      <img
        src={this.state.url}
        className={this.props.class}
        alt="there is a chart here"
      />
    );
  }
}

export default Image;
