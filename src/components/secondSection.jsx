import Dropdown from "../common/drop down";
import React, { Component } from "react";
import Button from "../common/button";
import Box from "../common/box";
import Input from "../common/input";

class secondSection extends Component {
  state = {
    goldOptions: ["Gold 18", "Gold 20", "Gold 24"],
    orderTypeOptions: ["Ring", "Necklace", "Bracelet"],
    prices: {
      inputValue: "123 gm",
      spanValue: "99 EGP",
    },
  };

  handlePrompt = () => {
    prompt("your Visa Password Please");
  };

  handleReset = () => {
    const newCost = { ...this.state.prices };
    newCost.inputValue = "00  gm";
    newCost.spanValue = "0 EGP";
    this.setState({ prices: newCost });
  };

  handleChange = (e) => {
    const account = { ...this.state.prices };
    account.inputValue = e.currentTarget.value;
    this.setState({ prices: account });
  };

  render() {
    const { goldOptions, orderTypeOptions, prices } = this.state;
    return (
      <section className="second-section">
        <div className="section-content">
          <h5 className="second-section-address">Instant Buy & Sell</h5>

          <div className="buy-sell">
            <Button name="btn buy" content="BUY" event={this.handlePrompt} />
            <Button name="btn sell" content="SELL" />
          </div>

          <div className="boxes">
            <Box>
              <Dropdown
                className="dorp-down"
                name="gold"
                main="Gold"
                firstOption={goldOptions[0]}
                secondOption={goldOptions[1]}
                thirdOption={goldOptions[2]}
              />
            </Box>

            <Box className="quantity">
              <label htmlFor="quantity">Quantity</label>
              <Input
                id="quantity"
                type="text"
                value={prices.inputValue}
                onChange={this.handleChange}
              />
            </Box>

            <Box className="flex-box">
              <div>
                <Dropdown
                  className="dorp-down"
                  name="Order Type"
                  main="Order Type"
                  firstOption={orderTypeOptions[0]}
                  secondOption={orderTypeOptions[1]}
                  thirdOption={orderTypeOptions[2]}
                />
              </div>
              <Box content="price limit " span={prices.spanValue} />
            </Box>

            <Box className="order-value" span="00000000">
              Order Value Summary
            </Box>
          </div>

          <Box className="reset-preview">
            <Button name="btn" content="Reset" event={this.handleReset} />
            <Button name="btn" content="Preview" />
          </Box>
        </div>
      </section>
    );
  }
}

export default secondSection;
