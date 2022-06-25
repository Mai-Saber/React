import React, { Component } from "react";
class Box extends Component {
  render() {
    const { content, span, children, className } = this.props;
    return (
      <div className={className}>
        {content}
        <span>{span}</span>
        {children}
      </div>
    );
  }
}

export default Box;
