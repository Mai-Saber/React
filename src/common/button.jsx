import React, { Component } from "react";

class Button extends Component {
  render() {
    const { name, content } = this.props;
    return <button className={name}>{content}</button>;
  }
}

export default Button;
