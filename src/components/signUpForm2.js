import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { saveUser } from '../actions/saveUser'

// npm install --save redux-form@4.1.3

class SignUpForm2 extends Component {
  render() {
    const {
      fields: { name, email, password, passwordConfirm },
      handleSubmit
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        style={{ margin: 30 }}
      >
        <div>
          <center>
            <h5

            >Cadastro de novo usuário</h5>
          </center>
          <div className="input-field form-group">
            <label>Nome</label>
            <input type="text" className="form-control" {...name} />
          </div>

          <div className="input-field form-group">
              <label>Email</label>
            <input type="text" className="form-control" {...email} />
          </div>

          <div className="input-field form-group">
            <label>Senha</label>
            <input type="text" className="form-control" {...password} />
          </div>

          <div className="input-field form-group">
            <label>Confirmar Senha</label>
            <input type="text" className="form-control" {...passwordConfirm} />
          </div>
          <center>
            <button
              style={{ backgroundColor: 'black', marginTop: 30 }}
              type="submit"
              className="btn btn-primary"
            >
              Criar Conta
              </button>
          </center>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewSignUpForm',
  fields: ['name', 'email', 'password', 'passwordConfirm'],
}, null, saveUser)(SignUpForm2);
