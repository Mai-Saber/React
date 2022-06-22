import React, { Component } from 'react';
class Box extends Component {
    
    render() { 
        return (
            <div className={this.props.class}>
                {this.props.content}
                <span>{this.props.span}</span>
                {this.props.children}
            </div>
        );
    }
}
 
export default Box;