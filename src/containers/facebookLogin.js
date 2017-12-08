import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import { saveActualUser } from '../actions/saveActualUser';

class FacebookLoginButton extends Component {

  static responseGoogle(response) {
    saveActualUser(response.profileObj.email, response.profileObj.googleId);
    browserHistory.push('/');
  }

  render() {
    return (
      <FacebookLogin
        appId="142563266506213"
        fields="name,email,picture"
        callback={FacebookLoginButton.responseFacebook}
        icon="fa-facebook"
      />
    );
  }
}

export default FacebookLoginButton;
