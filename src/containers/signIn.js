import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {};
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
                        <input id="userEmail" type="text" data-length="50" />
                        <label htmlFor="userEmail">E-mail</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12" id="inputPassword">
                        <input id="userPassword" type="password" data-length="50" />
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
                onClick={() => <h1>a</h1>}
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
  };
}

export default connect(mapStateToProps)(SignIn);
