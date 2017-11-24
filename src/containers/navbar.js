import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';
import { deleteActualUser } from '../actions/saveActualUser';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showInfoUserPC() {
    const EMPTY = 0;
    if (Object.keys(this.props.actualUser).length === EMPTY) {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => browserHistory.push('/signIn')}>Entrar</a></li>
          <li><a onClick={() => browserHistory.push('/signUpForm')}>Cadastrar</a></li>
        </div>
      );
    } else if (this.props.actualUser.data.admin) {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
          <li><a onClick={() => browserHistory.push('/admin')}>adminPage</a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.removeActualUser()}>Sair</a></li>
        </div>
      );
    } else {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
          <li><a onClick={() => browserHistory.push('/ranking')}>Ranking</a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.removeActualUser()}>Sair</a></li>
        </div>
      );
    }
  }

  showInfoUserMobile() {
    const EMPTY = 0;
    if (Object.keys(this.props.actualUser).length === EMPTY) {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => browserHistory.push('/signIn')}><i className="material-icons">open_in_browser</i></a></li>
          <li><a onClick={() => browserHistory.push('/signUpForm')}><i className="material-icons">receipt</i></a></li>
        </div>
      );
    } else if (this.props.actualUser.data.admin) {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
          <li><a onClick={() => browserHistory.push('/admin')}><i className="material-icons">people</i></a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.removeActualUser()}><i className="material-icons">exit_to_app</i></a></li>
        </div>
      );
    } else {
      return (
        <div>
          <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
          <li><a onClick={() => browserHistory.push('/ranking')}><i className="material-icons">assignment</i></a></li>
          <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
          <li><a onClick={() => this.props.removeActualUser()}><i className="material-icons">exit_to_app</i></a></li>
        </div>
      );
    }
  }

  showInPC() {
    return (
      <nav className="hide-on-med-and-down">
        <div className="nav-wrapper grey darken-3" id="renderNavBar">
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo center"
          >DepuTinder
           </a>
          <ul id="nav-mobile" className="right">
            { this.showInfoUserPC() }
          </ul>
        </div>
      </nav>
    );
  }

  showInMobile() {
    return (
      <nav className="hide-on-large-only">
        <div className="nav-wrapper grey darken-3">
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo left"
          >DepuTinder
          </a>
          <ul className="right">
            { this.showInfoUserMobile() }
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="navBar">
        { this.showInPC() }
        { this.showInMobile() }
      </div>
    );
  }
}

Navbar.propTypes = {
  actualUser: PropTypes.obj,
  removeActualUser: PropTypes.func,
};

Navbar.defaultProps = {
  actualUser: {},
  removeActualUser() {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeActualUser() {
      swal('Deslogado!',
        {
          icon: 'success',
        });
      dispatch(deleteActualUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
