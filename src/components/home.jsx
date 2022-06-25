import React, { Component } from "react";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

class Home extends Component {
  /* from this line to line  22 are repeated on any page that has a call to this component "FirstSection" */

  state = {
    cost: { firstValue: 980, secondValue: 970 },
  };

  handleIncrement = () => {
    const newCost = { ...this.state.cost };
    newCost.firstValue++;
    this.setState({ cost: newCost });
  };
  handleDecrement = () => {
    const newCost = { ...this.state.cost };
    newCost.secondValue--;
    this.setState({ cost: newCost });
  };

  render() {
    const { cost } = this.state;

    return (
      <div>
        <div className="row  justify-content-between">
          <div className="col-sm-12 col-lg-4 ">
            <FirstSection
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              firstValue={cost.firstValue}
              secondValue={cost.secondValue}
            />
          </div>

          <div className="col-sm-12 col-lg-4">
            <SecondSection />
          </div>

          <div className="col-sm-12 col-lg-4">
            <ThirdSection />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
