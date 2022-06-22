import React, { Component } from 'react';

class Flex extends Component {
     
    render() { 
        return (
          <div className={this.props.class}>
            <div>
              <h4 className={this.props.h4Class}>{this.props.h4Content}</h4>
            </div>

            <div>
              <p className={this.props.middleFirstPClass}>
                {this.props.middleFirstPContent}
              </p>
              <p className={this.props.middleSecondPClass}>
                {this.props.middleSecondPContent}
              </p>
              <p className={this.props.middleThirdPClass}>
                {this.props.middleThirdPContent}
              </p>
              <p className={this.props.middleFourthPClass}>
                {this.props.middleFourthPContent}
              </p>
            </div>

            <div className={this.props.thirdDivClass}>
              <p
                className={this.props.finalFirstPClass}
                span={this.props.finalFirstSpan}
              >
                {this.props.finalFirstPContent}
              </p>
              <p
                className={this.props.finalSecondPClass}
                span={this.props.finalSecondSpan}
              >
                {this.props.finalSecondPContent}
              </p>
              <p>{this.props.finalThirdPContent}</p>
              <p>{this.props.finalFourthPContent}</p>
            </div>
          </div>
        );
    }
}
 
export default Flex;