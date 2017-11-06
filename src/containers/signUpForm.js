import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import saveUser from '../actions/saveUser';

// npm install --save redux-form@4.1.3
// TODO
// props validation

class SignUpForm extends Component {
  static handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      inputTest: 'test',
    };
  }

  render() {
    const {
      fields: { name, email, password, passwordConfirm },
      handleSubmit,
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit((values) => {
          saveUser(values.name, values.email, values.password);
        })}
      >
        <div style={{ margin: 50 }}>
          <div className="input-field form-group" id="nameInputDiv">
            <input type="text" className="form-control" {...name} />
            <label htmlFor={this.props.values.name}>Nome</label>
          </div>

          <div className="input-field form-group" id="emailInputDiv">
            <input type="email" className="form-control" {...email} />
            <label htmlFor={this.props.values.email} data-error="Campo inválido">Email</label>
          </div>

          <div className="input-field form-group" id="passwordInputDiv">
            <input type="password" className="form-control" {...password} />
            <label htmlFor={this.props.values.password}>Senha</label>
          </div>

          <div className="input-field form-group" id="passwordConfirmInputDiv">
            <input type="password" className="form-control" {...passwordConfirm} />
            <label htmlFor={this.props.values.passwordConfirm}>Confirmar Senha</label>
          </div>
          <center>
            <button
              style={{ backgroundColor: 'black', marginTop: 30 }}
              className="btn btn-primary" id="signUpButton"
            >
              Criar Conta
              </button>
          </center>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  fields: PropTypes.object,
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  fields: {},
  handleSubmit() {},
  values: {},
};

export default reduxForm({
  form: 'NewSignUpForm',
  fields: ['name', 'email', 'password', 'passwordConfirm'],
}, null, { saveUser })(SignUpForm);
