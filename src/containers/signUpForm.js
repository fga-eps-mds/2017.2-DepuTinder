import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import FormInput from './formInput';
import saveUser from '../actions/saveUser';

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

  validatePasswordConfirmation() {
    if(this.state.userPassword === this.state.userConfirmedPassword && this.state.userPassword !== '') {
      console.log('SENHAS OK');
    } else {
      console.log('SENHAS DIFERENTES');
    }
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
                type="submit"
                style={{ width: 150, backgroundColor: 'black', marginTop: 30 }}
                id="signUpButton"
                onClick={() => {
                  browserHistory.push('/');
                  this.validatePasswordConfirmation();
                  saveUser(this.state.userName, this.state.userEmail, this.state.userPassword);
                }}
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
