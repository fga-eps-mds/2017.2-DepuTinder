import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { saveActualUser } from '../actions/saveActualUser';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
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
                          id="userEmail" type="email" data-length="50"
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
              <div className="errorLogin">
                <center>
                  { this.props.actualUser.status === 200 &&
                    browserHistory.push('/')
                  }
                  {
                    this.props.actualUser.status === undefined &&
                    Object.keys(this.props.actualUser).length !== 0 &&
                      <h5>Seu email ou senha esta errado. Tente novamente.</h5>
                  }
                </center>
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
                onClick={() => this.props.saveUser(this.state.email, this.state.password)}
              >Login
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  actualUser: PropTypes.obj,
  saveUser: PropTypes.func,
};

SignIn.defaultProps = {
  actualUser: {},
  saveUser() {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser(email, password) {
      dispatch(saveActualUser(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
