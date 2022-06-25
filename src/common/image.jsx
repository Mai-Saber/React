import React, { Component } from "react";

class Image extends Component {
  state = {
    url: "../../chart 2.png",
  };
  render() {
    const {url} =this.state
    const {className} =this.props
    return (
      <img
        src={url}
        className={className}
        alt="there is a chart here"
      />
    );
  }
}

export default Image;
