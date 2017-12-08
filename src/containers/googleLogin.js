import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import { saveActualUser } from '../actions/saveActualUser';

class GoogleLoginButton extends Component {

  static responseGoogle(response) {
    saveActualUser(response.profileObj.email, response.profileObj.googleId);
    browserHistory.push('/');
  }

  render() {
    return (
      <GoogleLogin
        clientId="849502021062-to8gq1f29rkac9jcql2bbvu71orpmntv.apps.googleusercontent.com"
        fields="email"
        onSuccess={GoogleLoginButton.responseGoogle}
        onFailure={GoogleLoginButton.responseGoogle}
      >

        <FontAwesome
          name="google"
        />
        <span> Login with Google</span>
      </GoogleLogin>
    );
  }
}

export default GoogleLoginButton;
