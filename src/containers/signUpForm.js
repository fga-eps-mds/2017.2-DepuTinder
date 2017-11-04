import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import saveUser from '../actions/saveUser';

// npm install --save redux-form@4.1.3

class SignUpForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  test = () => {
    console.log('test');
  }

  render() {
    const {
      fields: { name, email, password, passwordConfirm },
      handleSubmit,
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit((values) =>
        saveUser(values.name, values.email, values.password))}
      >
        <div style={{ margin: 50 }}>
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
            <input type="password" className="form-control" {...password} />
          </div>

          <div className="input-field form-group">
            <label>Confirmar Senha</label>
            <input type="password" className="form-control" {...passwordConfirm} />
          </div>
          <center>
            <button
              style={{ backgroundColor: 'black', marginTop: 30 }}
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
}, null, { saveUser })(SignUpForm);
