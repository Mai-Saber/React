import React, { Component } from "react";

class Button extends Component {
  render() {
    const { name, content, event } = this.props;
    return (
      <button className={name} onClick={event}>
        {content}
      </button>
    );
  }
}

export default Button;
