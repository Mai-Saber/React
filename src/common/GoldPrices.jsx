import React, { Component } from "react";

class GOldPrices extends Component {
  render() {
    const { h4Class, tittle, children } = this.props;
    return (
      <div className={this.props.class}>
        <div>
          <h4 className={h4Class}>{tittle}</h4>
        </div>

        {children}
      </div>
    );
  }
}

export default GOldPrices;
