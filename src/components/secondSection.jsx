import Dropdown from "../common/drop down";
import React, { Component } from "react";
import Button from '../common/button';
import Box from "../common/boxes";

class secondSection extends Component {
  state = {
    prices: {
      price: "10 EGP"
    },
  };

  // handleReset = () => {
  //   const newCost = { ...this.state.prices };
  //   let m = newCost.price;
  //      //m = 0
  //   this.setState({prices:newCost})
    
  // };

  render() {
    return (
      <section className="second-section">
        <div className="section-content">
          <h5 className="second-section-address">Instant Buy & Sell</h5>

          <div className="buy-sell">
            <Button name="btn buy" content="BUY" />
            <Button name="btn sell" content="SELL" />
          </div>

          <div className="boxes">
            <Box>
              <Dropdown
                class="dorp-down"
                name="gold"
                main="Gold"
                firstOption="Gold 18"
                secondOption="Gold 21"
                thirdOption="Gold 24"
              />
            </Box>

            <Box class="quantity">
              <label for="quantity">Quantity</label>
              <input id="quantity" type="text" value="123 gm" />
            </Box>

            <Box class="flex-box">
              <div>
                <Dropdown
                  class="dorp-down"
                  name="Order Type"
                  main="Order Type"
                  firstOption="Ring"
                  secondOption="Necklace"
                  thirdOption="Bracelet"
                />
              </div>
              <Box content="price limit " span={this.state.prices.price} />
            </Box>

            <Box class="order-value" span="00000000">
              Order Value Summary
            </Box>
          </div>

          <Box class="reset-preview">
            <Button name="btn" content="Reset" onClick={this.handleReset} />
            <Button name="btn" content="Preview" />
          </Box>
        </div>
      </section>
    );
  }
}

export default secondSection;
