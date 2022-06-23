import React, { Component } from "react";
import Box from "../common/box";
import GoldPrices from "../common/GoldPrices";

class ThirdSection extends Component {
  state = {};
  render() {
    return (
      <section className="third-section">
        <Box class="section-content">
          <h3 className="third-section-address">
            Account Balance
            <span className="icon">
              <i className="fa fa-bars"></i>
            </span>
          </h3>

          <div className="content">
            <GoldPrices class="flex" h4Class="gold" tittle="Gold Balance">
              <div>
                <p class="available-active">Available</p>
                <p class="yellow-col">Withdrawal</p>
                <p class="yellow-col">Total</p>
                <p class="yellow-col">Value</p>
              </div>

              <div>
                <p class="white-active">1350 gm</p>
                <p>EGP 92.257.00</p>
                <p>100 gm</p>
                <p>10 gm</p>
              </div>
            </GoldPrices>
          </div>

          <Box class="boxes">
            <Box class="div">
              <p>
                Cash Balance
                <span className="white-active"> EGP 100.000.00</span>
              </p>
            </Box>
            <Box class="div">
              <p>
                Un Realized P\L <span> EGP 950.024.00</span>
              </p>
            </Box>
            <Box class="div">
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
