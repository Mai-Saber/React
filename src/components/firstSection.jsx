import React, { Component } from "react";
import Image from "../common/image";
import Dropdown from "../common/drop down";
import Flex from "../common/flex";


class firstSection extends Component {
  state = {
    URL: "./chart 2.png",
  };

  render() {
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
              <Flex
                class="flex"
                h4Class="gold"
                h4Content="Gold"
                middleFirstPClass="green"
                middleFirstPContent="Buy"
                middleSecondPClass="red"
                middleSecondPContent="Sell"
                middleThirdPContent="Daily change"
                middleFourthPContent="Daily change %"
                finalFirstPClass="green set-position"
                finalSecondPClass="red set-position"
                finalFirstPContent="EGP 980.00"
                finalSecondPContent="EGP 970.00"
                finalThirdPContent="EGP 5.0"
                finalFourthPContent="0.1 %"
              />
                    
                    
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
            <Image />

            <Dropdown
              class="day"
              name="day"
              main="Day"
              firstOption="saturday"
              secondOption="sunday"
              thirdOption="tuesday"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default firstSection;
