import React, { Component } from 'react';
import Box from '../common/boxes';
import Flex from '../common/flex';


 class ThirdSection extends Component {
    state = {  } 
    render() { 
        return (
          <section className="third-section">
            <Box class="section-content">
              <h3 className="third-section-address">
                Account Balance
                <span className="icon">
                  <i className="fa fa-bars"></i>
                </span>
              </h3>

              <div className="content">
                <Flex
                  class="flex"
                  h4Class="gold"
                  h4Content="Gold Balance"
                  middleFirstPClass="available-active"
                  middleFirstPContent="Available"
                  middleSecondPClass="yellow-col"
                  middleSecondPContent="Withdrawal"
                  middleThirdPClass="yellow-col"
                  middleThirdPContent="Total"
                  middleFourthPClass="yellow-col"
                  middleFourthPContent="Value"
                  finalFirstPClass="white-active"
                  finalFirstPContent="1350 gm"
                  finalSecondPContent="EGP 92.257.00"
                  finalThirdPContent="100 gm"
                  finalFourthPContent="10 gm"
                />
              </div>

              <Box class="boxes">
                <Box class="div">
                  <p>
                    Cash Balance
                    <span className="white-active"> EGP 100.000.00</span>
                  </p>
                </Box>
                <Box class="div">
                  <p>
                    Un Realized P\L <span> EGP 950.024.00</span>
                  </p>
                </Box>
                <Box class="div">
                  <p>
                    Funds in Withdrawal <span> EGP 950.024.00</span>
                  </p>
                </Box>
                <Box className="div">
                  <p>
                    Portfolio Value <span> EGP 90.183</span>
                  </p>
                </Box>
              </Box>
            </Box>
          </section>
        );
    }
 }
  
 export default ThirdSection;