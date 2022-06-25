import React, { Component } from "react";
import Image from "../common/image";
import Dropdown from "../common/drop down";
import GoldPrices from "../common/GoldPrices";

class firstSection extends Component {
  state = {
    options: ["saturday", "sunday", "tuesday"],
  };

  render() {
    const { options } = this.state;
    const { firstValue, secondValue, onDecrement, onIncrement } = this.props;
    return (
      <React.Fragment>
        <section className="first-section">
          <div className="upper-div">
            <div className="address">
              <b>Live Metal Prices</b>
              <span className="market-status">
                Market is Open
                <span className="icon">
                  <i className="fa fa-circle"></i>
                </span>
              </span>
            </div>

            <div className="content">
              <GoldPrices className="flex" h4Class="gold" tittle="Gold">
                <div>
                  <p className="green">Buy</p>
                  <p className="red">Sell</p>
                  <p>Daily change</p>
                  <p>Daily change %</p>
                </div>

                <div>
                  <p className="green set-position green-set">
                    <span onClick={onIncrement}>
                      <i className="fa fa-caret-up"></i>
                    </span>
                    EGP {firstValue}
                  </p>
                  <p className="red set-position red-set">
                    <span onClick={onDecrement}>
                      <i className="fa fa-caret-down"></i>
                    </span>
                    EGP {secondValue}
                  </p>
                  <p>EGP 5.0</p>
                  <p>0.1 %</p>
                </div>
              </GoldPrices>

              <span className="right-note">
                daily change- difference from day before
              </span>
            </div>
          </div>

          <div className="lower-div ">
            <b>
              Price Charts:
              <span className="gold">
                Gold
                <span className="icon">
                  <i className="fa fa-angle-down"></i>
                </span>
              </span>
            </b>

            <Image className="img" />

            <Dropdown
              className="day"
              name="day"
              main="Day"
              firstOption={options[0]}
              secondOption={options[1]}
              thirdOption={options[2]}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default firstSection;
