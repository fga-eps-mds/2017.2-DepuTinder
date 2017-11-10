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

  validateFields() {
    if (this.state.userName === '' ||
      this.state.userEmail === '') {
      console.log('ERRO, UM OU MAIS CAMPOS VAZIOS');
    }
  }

  validatePasswordConfirmation() {
    this.validateFields();
    if(this.state.userPassword === '') {
      console.log('ERRO, SENHA INVALIDA');
    } else if (this.state.userPassword !== this.state.userConfirmedPassword ) {
      console.log('ERRO, SENHAS DIFERENTES');
    } else {
      console.log('SENHAS OK');
      saveUser(this.state.userName, this.state.userEmail, this.state.userPassword);
      browserHistory.push('/signUpSuccessful');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container" style={{ marginTop: 50 }} >

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
              <a
                className="btn btn-primary btn-lg"
                type="submit"
                style={{ backgroundColor: 'black', marginTop: 30 }}
                id="signUpButton"
                onClick={() => {
                  this.validatePasswordConfirmation();
                }}
              >
                Criar conta
              </a>
            </center>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
