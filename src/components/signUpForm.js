import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="userSignUpForm">

        <div className="form-group" id="inputGroup">
          <label htmlFor="userName" id="nameLabel">Nome:</label>
          <input
            id="userNameInput"
            value={this.state.userName}
            onChange={this.handleChange}
            type="text"
            name="userName"
            className="form-control"
          />
        </div>

        <div className="form-group" id="buttonGroup">
          <button
            className="btn btn-primary btn-lg"
            id="signUpButton"
          >
            Sign Up
          </button>
        </div>

      </form>
    );
  }
}

export default SignUpForm;
