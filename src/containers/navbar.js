import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';
import { userLogoutRequest } from '../actions/userLogoutRequest';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showInfoUserPC() {
    const EMPTY = 0;
    let content;

    if (Object.keys(this.props.actualUser).length === EMPTY
        || this.props.actualUser.status !== 200) {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/signIn')}><i className="material-icons hide-on-large-only">open_in_browser</i><a className="hide-on-med-and-down">Entrar</a></a></li>
          <li><a onClick={() => browserHistory.push('/signUpForm')}><i className="material-icons hide-on-large-only">person_add</i><a className="hide-on-med-and-down">Cadastrar</a></a></li>
        </div>
      );
    } else {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          {
            this.props.actualUser.data.admin &&
              <li><a onClick={() => browserHistory.push('/admin')}>{this.props.actualUser.data.userName}</a></li>
          }
          {
            !this.props.actualUser.data.admin &&
              <li><a onClick={() => browserHistory.push('/user')}>{this.props.actualUser.data.userName}</a></li>
          }
          {
            !this.props.actualUser.data.admin &&
              <li><a onClick={() => browserHistory.push('/ranking')}><i className="material-icons hide-on-large-only">assignment</i><a className="hide-on-med-and-down">Ranking</a></a></li>
          }
          { content }
          <li><a onClick={() => this.props.userLogoutRequest()}><i className="material-icons hide-on-large-only">exit_to_app</i><a className="hide-on-med-and-down">Sair</a></a></li>
        </div>
      );
    }
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
