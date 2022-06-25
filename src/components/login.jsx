import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate = () => {
    //clone
    const errors = {};
    //edit
    const result = Joi.validate(this.state.account, this.schema);
    if (result.error === null) {
      this.setState({ errors: {} });
      return null;
    }
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    //setState
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account: account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} method="get">
          <div className="form-group">
            <label htmlFor="user" className="form-label">
              User Name
            </label>

            <Input
              autoFocus
              name="username"
              onChange={this.handleChange}
              value={account.username}
              type="text"
              id="user"
              className="form-control"
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">{errors.username}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Password" className="form-label">
              Password
            </label>

            <Input
              name="password"
              onChange={this.handleChange}
              value={account.password}
              type="password"
              className="form-control"
              id="Password"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
