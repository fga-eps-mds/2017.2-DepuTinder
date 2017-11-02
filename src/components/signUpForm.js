import React, { Component } from 'react';
import FormInput from './formInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmedPassword: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="userSignUpForm">

        <FormInput inputDivID="nameInputDiv" inputID="Nome" type="text" />
        <FormInput inputDivID="emailInputDiv" inputID="Email" type="email" />
        <FormInput inputDivID="passwordInputDiv" inputID="Senha" type="password" />
        <FormInput inputDivID="passwordConfirmInputDiv" inputID="Confirmar Senha" type="password" />

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
