import React, { Component } from 'react';
import FormInput from './formInput';

class SignUpForm extends Component {
  static handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: 'name',
      userEmail: 'email@email',
      userPassword: '12345',
      userConfirmedPassword: '12345',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.validateForm();
    this.setState({ [event.target.name]: event.target.value });
  }

  validateForm() {
    if (this.state.userPassword === this.state.userConfirmedPassword) {
      console.log('password match');
    } else {
      console.log('password wrong');
    }
  }

  show() {
    console.log(this.state.userName);
    console.log(this.state.userEmail);
    console.log(this.state.userPassword);
    console.log(this.state.userConfirmedPassword);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="userSignUpForm">
        <div className="container" style={{ marginTop: 50 }}>
          <FormInput
            inputDivID="nameInputDiv"
            inputID="Nome"
            type="text"
            name="userName"
            value={this.state.userName}
            handleChange={this.handleChange}
          />
          <FormInput
            inputDivID="emailInputDiv"
            inputID="Email" type="email"
            name="userEmail"
            value={this.state.userEmail}
            handleChange={this.handleChange}
          />
          <FormInput
            inputDivID="passwordInputDiv"
            inputID="Senha"
            type="password"
            name="userPassword"
            value={this.state.userPassword}
            handleChange={this.handleChange}
          />
          <FormInput
            inputDivID="passwordConfirmInputDiv"
            inputID="Confirmar Senha"
            type="password"
            name="userConfirmedPassword"
            value={this.state.userConfirmedPassword}
            handleChange={this.handleChange}
          />

          <div className="form-group" id="buttonGroup">
            <center>
              <button
                className="btn btn-primary btn-lg"
                id="signUpButton"
                onClick={this.show}
              >
                Criar conta
              </button>
            </center>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
