import React, { Component } from "react";

class GOldPrices extends Component {
  render() {
    const { className, h4Class, tittle, children } = this.props;
    return (
      <div className={className}>
        <div>
          <h4 className={h4Class}>{tittle}</h4>
        </div>

        {children}
      </div>
    );
  }
}

export default GOldPrices;
