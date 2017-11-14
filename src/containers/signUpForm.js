import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import saveUser from '../actions/saveUser';
import SignUpSuccessful from '../components/signUpSuccessful';
import AccountInputForm from '../components/accountInputForm';

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

  onSubmitValidation() {
    const VALID = 1;
    const NOT_VALID = 0;
    const validEmail = this.emailIsValid();
    const fields = this.validateFields();
    const password = this.validatePasswordConfirmation();
    if (fields === VALID && password === VALID && validEmail) {
      this.onSignUpSuccess();
    } else if (fields === NOT_VALID || validEmail === false) {
      swal('Preencha todos os campos corretamente!');
    } else if (password === NOT_VALID) {
      swal('Senha nao confirmada');
    }
  }

  onSignUpSuccess() {
    saveUser(this.state.userName, this.state.userEmail, this.state.userPassword);
    browserHistory.push('/signUpSuccessful');
    return (
      <SignUpSuccessful />
    );
  }

  emailIsValid() {
    // check @ not starting the emailAdress
    const atSymbol = this.state.userEmail.indexOf('@');
    if (atSymbol < 1) return false;
    // check emailAdress to have . and to have at least 2 characters between @ and .
    const dot = this.state.userEmail.indexOf('.');
    if (dot <= atSymbol + 2) return false;
    // check that the dot is not at the end
    if (dot === this.state.userEmail.length - 1) return false;
    return true;
  }

  validateFields() {
    if (this.state.userName === '' ||
      this.state.userEmail === '' ||
      this.state.userPassword === '') {
      return 0;
    } else {
      return 1;
    }
  }

  validatePasswordConfirmation() {
    if (this.state.userPassword !== this.state.userConfirmedPassword) {
      return 0;
    } else {
      return 1;
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container" style={{ marginTop: 50 }} >

          <AccountInputForm
            nameInputId="Nome"
            emailInputId="Email"
            passwordInputId="Senha"
            confirmedPasswordInputId="Confirmar Senha"
            nameValue={this.state.userName}
            emailValue={this.state.userEmail}
            passwordValue={this.state.userPassword}
            confirmedPasswordValue={this.state.userConfirmedPassword}
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
                  this.onSubmitValidation();
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
