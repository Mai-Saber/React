import React, { Component } from 'react';

class Boxes extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1>{this.props.content}</h1>
            <h1>{this.props.content2}</h1>
            </div>
        );
    }
}
 
export default Boxes;