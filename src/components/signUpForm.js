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
        <div
          className="container"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <FormInput inputDivID="nameInputDiv" inputID="Nome" type="text" />
          <FormInput inputDivID="emailInputDiv" inputID="Email" type="email" />
          <FormInput inputDivID="passwordInputDiv" inputID="Senha" type="password" />
          <FormInput inputDivID="passwordConfirmInputDiv" inputID="Confirmar Senha" type="password" />

          <div className="form-group" id="buttonGroup">
            <center>
              <button
                className="btn btn-primary btn-lg"
                style={{ width: 150, backgroundColor: 'black', marginTop: 30 }}
                id="signUpButton"
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
