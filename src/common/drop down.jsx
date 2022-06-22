import React, { Component } from 'react';

class Dropdown extends Component {
    
    render() { 
        return (
          <select className={this.props.class} name={this.props.name}>
            <option value={this.props.main}>{this.props.main}</option>
            <option value={this.props.firstOption}>
              {this.props.firstOption}
            </option>

            <option value={this.props.secondOption}>
              {this.props.secondOption}
            </option>

            <option value={this.props.thirdOption}>
              {this.props.thirdOption}
            </option>
          </select>
        );
    }
}
 
export default Dropdown;