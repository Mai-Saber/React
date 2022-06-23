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
              <GoldPrices class="flex" h4Class="gold" tittle="Gold">
                <div>
                  <p class="green">Buy</p>
                  <p class="red">Sell</p>
                  <p>Daily change</p>
                  <p>Daily change %</p>
                </div>

                <div>
                  <p class="green set-position">
                    <span>
                      <i class="fa fa-caret-up"></i>
                    </span>
                    EGP 980.00
                  </p>
                  <p class="red set-position">
                    <span>
                      <i class="fa fa-caret-down"></i>
                    </span>
                    EGP 970.00
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
            <Image class="img" />

            <Dropdown
              class="day"
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
