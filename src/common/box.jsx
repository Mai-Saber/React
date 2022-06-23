import React, { Component } from "react";
class Box extends Component {
  render() {
    const { content, span, children } = this.props;
    return (
      <div className={this.props.class}>
        {content}
        <span>{span}</span>
        {children}
      </div>
    );
  }
}

export default Box;
