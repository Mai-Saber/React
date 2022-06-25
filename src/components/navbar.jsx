import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg justify-content-between ">
        <a
          href="https://www.goldady.com/"
          title="go to company site"
          target="blank"
        >
          <img className="img" src="../../../logo.png" alt="LOGO" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="./home"
                title="All Sections"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="./firstSection"
                title="the First Section "
              >
                Live Prices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="./secondSection"
                title="the Second Section "
              >
                Buy & Sell
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="./thirdSection"
                title="the Third Section "
              >
                Account Balance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./login" title="Log in ">
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
