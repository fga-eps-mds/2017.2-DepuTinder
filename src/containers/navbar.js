import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';
import { deleteActualUser } from '../actions/saveActualUser';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const EMPTY = 0;
    return (
      <div className="navBar">
        <nav>
          <div className="nav-wrapper grey darken-3" id="renderNavBar">
            <div className="brand-logo" id="textNavBar">
              <a
                onClick={() => browserHistory.push('/')}
                className="center"
              >DepuTinder
               </a>
            </div>
            <ul id="nav-mobile" className="right hide-on-med">
              { Object.keys(this.props.actualUser).length === EMPTY &&
                <div>
                  <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
                  <li><a onClick={() => browserHistory.push('/signIn')}>Entrar</a></li>
                  <li><a onClick={() => browserHistory.push('/signUpForm')}>Cadastrar</a></li>
                </div>
              }
              { Object.keys(this.props.actualUser).length !== EMPTY &&
                  this.props.actualUser.data.admin &&
                    <div>
                      <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
                      <li><a onClick={() => browserHistory.push('/admin')}>Página de Admin</a></li>
                      <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
                      <li><a onClick={() => this.props.removeActualUser()}>Sair</a></li>
                    </div>
              }
              { Object.keys(this.props.actualUser).length !== EMPTY &&
                  !this.props.actualUser.data.admin &&
                    <div>
                      <li><a onClick={() => browserHistory.push('/')}>{this.props.actualUser.data.userName}</a></li>
                      <li><a onClick={() => browserHistory.push('/ranking')}>Ranking</a></li>
                      <li><a onClick={() => browserHistory.push('/search')}><i className="material-icons">search</i></a></li>
                      <li><a onClick={() => this.props.removeActualUser()}>Sair</a></li>
                    </div>
              }
            </ul>
          </div>
        </nav>
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
