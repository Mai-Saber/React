import React, { Component } from "react";

class Input extends Component {
  render() {
    const { type, id, className, name, value, onChange, placeholder } =
      this.props;
    return (
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoFocus
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
