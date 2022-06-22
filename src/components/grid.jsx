import React, { Component } from 'react';
import FirstSection from './firstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';

class Grid extends Component {
    
    render() { 
        return (
            
            <div>
                <div className="row">

                    <div className="col-sm">
                        <FirstSection />
                    </div>

                    <div className="col-sm">
                    <SecondSection/>
                    </div>

                    <div className="col-sm">
                    <ThirdSection/>
                    </div>
                </div>
                </div>
        );

    }
}
 
export default Grid;