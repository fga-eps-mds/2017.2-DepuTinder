import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountInputForm from '../components/accountInputForm';

// Para renderizar este componente é preciso colocar /editAccountForm no browserHistory do signIn
// e logar com email:admin@admin.com senha: admin123

class EditAccountForm extends Component {

  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      oldUserName: '',
      oldUserEmail: '',
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
            passwordInputId="Nova senha"
            confirmedPasswordInputId="Confirmar nova senha"
            nameValue={this.state.oldUserName}
            emailValue={this.state.oldUserEmail}
            passwordValue={this.state.oldUserPassword}
            confirmedPasswordValue={this.state.oldUserConfirmedPassword}
            nameLabelState="active"
            emailLabelState="active"
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

EditAccountForm.propTypes = {
  actualUser: PropTypes.obj,
};

EditAccountForm.defaultProps = {
  actualUser: {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

export default connect(mapStateToProps)(EditAccountForm);
