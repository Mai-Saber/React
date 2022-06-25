import React, { Component } from "react";
import Box from "../common/box";
import GoldPrices from "../common/GoldPrices";

class ThirdSection extends Component {
  state = {};
  render() {
    return (
      <section className="third-section">
        <Box className="section-content">
          <h3 className="third-section-address">
            Account Balance
            <span className="icon">
              <i className="fa fa-bars"></i>
            </span>
          </h3>

          <div className="content">
            <GoldPrices className="flex" h4Class="gold" tittle="Gold Balance">
              <div>
                <p className="available-active">Available</p>
                <p className="yellow-col">Withdrawal</p>
                <p className="yellow-col">Total</p>
                <p className="yellow-col">Value</p>
              </div>

              <div>
                <p className="white-active">1350 gm</p>
                <p>EGP 92.257.00</p>
                <p>100 gm</p>
                <p>10 gm</p>
              </div>
            </GoldPrices>
          </div>

          <Box className="boxes">
            <Box className="div">
              <p>
                Cash Balance
                <span className="white-active"> EGP 100.000.00</span>
              </p>
            </Box>
            <Box className="div">
              <p>
                Un Realized P\L <span> EGP 950.024.00</span>
              </p>
            </Box>
            <Box className="div">
              <p>
                Funds in Withdrawal <span> EGP 950.024.00</span>
              </p>
            </Box>
            <Box className="div">
              <p>
                Portfolio Value <span> EGP 90.183</span>
              </p>
            </Box>
          </Box>
        </Box>
      </section>
    );
  }
}

export default ThirdSection;
