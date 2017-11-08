import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { saveActualUser } from '../actions/saveActualUser';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  sendLoginData(email, password) {
    const data = { params: { userEmail: email, userPassword: password } };
    const HOST = 'http://localhost:8000/login/';

    axios.get(HOST, data)
    .then((response) => {
      this.props.saveUser(
        response.data.userEmail,
        response.data.userName,
        response.data.userImage);
    });
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div className="logInPage">
        <div
          id="titleLogIn"
        >
          <br />
          Login
        </div>
        <br />
        <div className="row">
          <div className="col s6 m6 l6">
            <div className="card" id="cardLogIn">
              <div className="card-content white accent-3">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="input-field col s12" id="inputEmail">
                        <input
                          id="userEmail" type="text" data-length="50"
                          onChange={event => this.handleEmailChange(event.target.value)}
                        />
                        <label htmlFor="userEmail">E-mail</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12" id="inputPassword">
                        <input
                          id="userPassword" type="password" data-length="50"
                          onChange={event => this.handlePasswordChange(event.target.value)}
                        />
                        <label htmlFor="userPassword">Senha</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="adminQuestionButtonsRow">
          <div className="input-field col s12" id="backButtonCollumn">
            <center>
              <a
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="loginButton"
                onClick={() => this.sendLoginData(this.state.email, this.state.password)}
              >Login
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser(email, name, image) {
      dispatch(saveActualUser(email, name, image));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
