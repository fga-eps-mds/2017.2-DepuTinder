import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { saveActualUser } from '../actions/saveActualUser';

class GoogleLoginButton extends Component {

  static responseGoogle(response) {
    if (response.profileObj.email && response.profileObj.googleId) {
      (saveActualUser(response.profileObj.email,
      response.profileObj.googleId));
      console.log(response);
    }
  }

  render() {
    return (
      <GoogleLogin
        clientId="849502021062-to8gq1f29rkac9jcql2bbvu71orpmntv.apps.googleusercontent.com"
        fields="email,googleId"
        onSuccess={GoogleLoginButton.responseGoogle}
        onFailure={GoogleLoginButton.responseGoogle}
      />
    );
  }
}

GoogleLoginButton.propTypes = {
  actualUser: PropTypes.obj,
};

GoogleLoginButton.defaultProps = {
  actualUser: {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

export default connect(mapStateToProps)(GoogleLoginButton);
