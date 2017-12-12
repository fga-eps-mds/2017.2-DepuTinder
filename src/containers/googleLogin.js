import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { saveActualUser } from '../actions/saveActualUser';

class GoogleLoginButton extends Component {

  static responseGoogle(response) {
    console.log(response);
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    if (this.props.actualUser.status === 200) {
      browserHistory.push('/');
    }

    return (
      <GoogleLogin
        clientId="849502021062-to8gq1f29rkac9jcql2bbvu71orpmntv.apps.googleusercontent.com"
        fields="email"
        onSuccess={GoogleLoginButton.responseGoogle}
        onFailure={GoogleLoginButton.responseGoogle}
      />
    );
  }
}

GoogleLoginButton.propTypes = {
  actualUser: PropTypes.obj,
  saveUser: PropTypes.func.isRequired,
};

GoogleLoginButton.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);
