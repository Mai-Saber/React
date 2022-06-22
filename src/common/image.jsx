import React, { Component } from 'react';

class Image extends Component {
    state = {  
        url:"../src/chart 2.png"
    } 
    render() { 
        return <img src={this.state.url} alt="这里有一张图片" />;
    }
}
 
export default Image;