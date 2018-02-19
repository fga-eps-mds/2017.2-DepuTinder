import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';
import { userLogoutRequest } from '../actions/userLogoutRequest';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loginStatus: false };
    this.greetings = this.greetings.bind(this);
  }

  ComponentWillMount() {
    if (this.props.actualUser === { }) {
      this.setState({ loginStatus: false });
    } else {
      this.setState({ loginStatus: true });
    }
  }

  greetings() {
    if (this.state.loginStatus === false) {
      return <li><a onClick={() => browserHistory.push('/')}>{localStorage.getItem('userName')}</a></li>;
    } else {
      return <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.userName}</a></li>;
    }
  }

  showInfoUserPC() {
    const token = localStorage.getItem('userToken');
    let returnView = {};
    if (!token) {
      returnView = (
        <div>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => browserHistory.push('/signIn')}>Entrar</a></li>
          <li><a onClick={() => browserHistory.push('/signUpForm')}>Cadastrar</a></li>
        </div>
      );
    } else if (token && this.props.actualUser.admin) {
      returnView = (
        <div>
          {this.greetings()}
          <li><a onClick={() => browserHistory.push('/admin')}>adminPage</a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.userLogoutRequest()}>Sair</a></li>
        </div>
      );
    } else if (token) {
      returnView = (
        <div>
          {this.greetings()}
          <li><a onClick={() => browserHistory.push('/ranking')}>Ranking</a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.userLogoutRequest()}>Sair</a></li>
        </div>
      );
    }
    return returnView;
  }

  showInfoUserMobile() {
    const token = localStorage.getItem('userToken');
    let returnView = {};
    if (!token) {
      returnView = (
        <div>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => browserHistory.push('/signIn')}><i className="material-icons">open_in_browser</i></a></li>
          <li><a onClick={() => browserHistory.push('/signUpForm')}><i className="material-icons">person_add</i></a></li>
        </div>
      );
    } else if (token && this.props.actualUser.admin) {
      returnView = (
        <div>
          {this.greetings()}
          <li><a onClick={() => browserHistory.push('/admin')}><i className="material-icons">people</i></a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.userLogoutRequest()}><i className="material-icons">exit_to_app</i></a></li>
        </div>
      );
    } else if (token) {
      returnView = (
        <div>
          {this.greetings()}
          <li><a onClick={() => browserHistory.push('/ranking')}><i className="material-icons">assignment</i></a></li>
          <li><a onClick={() => this.props.userLogoutRequest()}><i className="material-icons hide-on-large-only">exit_to_app</i><a className="hide-on-med-and-down">Sair</a></a></li>
        </div>
      );
    }
    return returnView;
  }

  showInPC() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3" id="renderNavBar">
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo center hide-on-med-and-down"
          >DepuTinder
           </a>
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo left hide-on-large-only"
          ><i className="material-icons">home</i>
          </a>
          <ul id="nav-mobile" className="right">
            { this.showInfoUserPC() }
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="navBar">
        { this.showInPC() }
      </div>
    );
  }
}

Navbar.propTypes = {
  actualUser: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  userLogoutRequest: PropTypes.func,
};

Navbar.defaultProps = {
  actualUser: ([]),
  userLogoutRequest() {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogoutRequest() {
      swal('Deslogado!',
        {
          icon: 'success',
        });
      dispatch(userLogoutRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
