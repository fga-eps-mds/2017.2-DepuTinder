import React, { Component } from 'react';
import FormInput from './formInput';

class SignUpForm extends Component {
  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmedPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
        <div
          className="container"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >

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
                style={{ width: 150, backgroundColor: 'black', marginTop: 30 }}
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
