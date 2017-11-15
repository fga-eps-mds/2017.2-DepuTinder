import React, { Component } from 'react';
import AccountInputForm from '../components/accountInputForm';

class EditAccountForm extends Component {

  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      oldUserName: '',
      oldUserEmail: '',
      oldUserPassword: '',
      oldUserConfirmedPassword: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmedPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitValidation() {
    console.log('SUBMIT NEW INFO');
    console.log(this.state.userName);
    console.log(this.state.userEmail);
    console.log(this.state.userPassword);
    console.log(this.state.userConfirmedPassword);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container" style={{ marginTop: 50 }} >

          <AccountInputForm
            nameInputId="Novo nome"
            emailInputId="Novo email"
            passwordInputId="Novo senha"
            confirmedPasswordInputId="Confirmar nova senha"
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
                id="editAccountButton"
                onClick={() => { this.onSubmitValidation(); }}
              > Editar conta
              </a>
            </center>
          </div>
        </div>
      </form>
    );
  }
}

export default EditAccountForm;
