import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import AccountInputForm from '../components/accountInputForm';
import updateUser from '../actions/updateUser';
import EditSuccessful from '../components/editSuccessful';

// Para renderizar este componente é preciso colocar /editAccountForm no browserHistory do signIn
// e logar com email:admin@admin.com senha: admin123

class EditAccountForm extends Component {

  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      oldUserName: this.props.actualUser.data.userName,
      oldUserEmail: this.props.actualUser.data.userEmail,
      oldUserPassword: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmedPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onEditSuccess() {
    updateUser(
      this.state.oldUserEmail,
      this.state.oldUserPassword,
      this.state.userName,
      this.state.userEmail,
      this.state.userPassword,
    );
    browserHistory.push('/editSuccessful');
    return (
      <EditSuccessful />
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

  fillEmptyFields() {
    if (this.state.userName === '') {
      this.state.userName = this.state.oldUserName;
    }
    if (this.state.userEmail === '') {
      this.state.userEmail = this.state.oldUserEmail;
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
            nameInputId="Novo nome"
            emailInputId="Novo email"
            passwordInputId="Senha atual"
            confirmedPasswordInputId="Nova senha"
            nameStateKey="userName"
            emailStateKey="userEmail"
            passwordStateKey="oldUserPassword"
            confirmPasswordKey="userPassword"
            namePlaceholder={this.state.oldUserName}
            emailPlaceholder={this.state.oldUserEmail}
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
                onClick={() => {
                  this.fillEmptyFields();
                  if (this.emailIsValid()) {
                    this.onEditSuccess();
                  } else {
                    swal('Preencha os campos corretamente');
                  }
                }}
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
