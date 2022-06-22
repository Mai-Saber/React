import React, { Component } from 'react';
class Span extends Component {
   
    render() { 
        return (
          <div>
            <span>
              <i class="fa fa-caret-up"></i>
            </span>

            <span>
              <i class="fa fa-caret-down"></i>
            </span>
          </div>
        );
    }
}
 
export default Span;