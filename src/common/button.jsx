import React, { Component } from 'react';

class Button extends Component {
    
    render() { 
        return (<button
            className={this.props.name}
        >
        {this.props.content}
    </button>);
    }
}
 
export default Button;