import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import Home from "./components/home";
import Login from "./components/login";

class App extends Component {
  /* from this line to line  26 will be repeated on any page that has a call to this component "FirstSection" */
  state = {
    cost: { firstValue: 980, secondValue: 970 },
  };

  handleIncrement = () => {
    const newCost = { ...this.state.cost };
    newCost.firstValue++;
    this.setState({ cost: newCost });
  };
  handleDecrement = () => {
    const newCost = { ...this.state.cost };
    newCost.secondValue--;
    this.setState({ cost: newCost });
  };

  render() {
    const { cost } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route
              path="/firstSection"
              render={(props) => (
                <FirstSection
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  firstValue={cost.firstValue}
                  secondValue={cost.secondValue}
                  {...props}
                />
              )}
            />
            <Route path="/secondSection" component={SecondSection} />
            <Route path="/thirdSection" component={ThirdSection} />
            <Route path="/login" component={Login} />

            <Redirect form="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
