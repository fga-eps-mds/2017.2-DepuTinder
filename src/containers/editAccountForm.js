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
      newUserName: '',
      newUserEmail: '',
      newUserPassword: '',
      newUserConfirmedPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
            passwordInputId="Nova senha"
            confirmedPasswordInputId="Confirmar nova senha"
            nameValue={this.state.newUserName}
            emailValue={this.state.newUserEmail}
            passwordValue={this.state.newUserPassword}
            confirmedPasswordValue={this.state.newUserConfirmedPassword}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <center>
            <a
              className="btn btn-primary btn-lg"
              type="submit"
              style={{ backgroundColor: 'black', marginTop: 30 }}
              id="editAccountButton"
              onClick={() => { console.log('SUBMIT NEW INFO'); }}
            >
              Editar conta
            </a>
          </center>
        </div>
      </form>
    );
  }
}

export default EditAccountForm;
