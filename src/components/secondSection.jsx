import Dropdown from "../common/drop down";
import React, { Component } from "react";
import Button from "../common/button";
import Box from "../common/box";

class secondSection extends Component {
  state = {
    goldOptions: ["Gold 18", "Gold 20", "Gold 24"],
    orderTypeOptions: ["Ring", "Necklace", "Bracelet"],
    prices: {
      price: "10 EGP",
    },
  };

  handleReset = () => {
    const newCost = { ...this.state.prices };
    newCost.price = "0 EGP ";
    this.setState({ prices: newCost });
  };

  render() {
    const { goldOptions, orderTypeOptions } = this.state;
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
                firstOption={goldOptions[0]}
                secondOption={goldOptions[1]}
                thirdOption={goldOptions[2]}
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
                  firstOption={orderTypeOptions[0]}
                  secondOption={orderTypeOptions[1]}
                  thirdOption={orderTypeOptions[2]}
                />
              </div>
              <Box content="price limit " span={this.state.prices.price} />
            </Box>

            <Box class="order-value" span="00000000">
              Order Value Summary
            </Box>
          </div>

          <Box class="reset-preview">
            <Button
              name="btn"
              content="Reset"
              onClick={() => this.handleReset()}
            />
            <Button name="btn" content="Preview" />
          </Box>
        </div>
      </section>
    );
  }
}

export default secondSection;
