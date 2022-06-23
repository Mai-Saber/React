import React, { Component } from "react";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="row  justify-content-between align-items-center">
          <div className="col-sm-12 col-lg-4 ">
            <FirstSection />
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

export default Grid;
