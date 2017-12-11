import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { saveActualUser } from '../actions/saveActualUser';


class FacebookLoginButton extends Component {

  static responseFacebook(response) {
    saveActualUser(response.email, response.id);
    console.log(response);
  }

  componentWillMount() {
    window.setTimeout(1000);
    if (this.props.actualUser.status === 200) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <FacebookLogin
        appId="142563266506213"
        fields="email"
        callback={FacebookLoginButton.responseFacebook}
        icon="fa-facebook"
      />
    );
  }
}

FacebookLoginButton.propTypes = {
  actualUser: PropTypes.obj,
};

FacebookLoginButton.defaultProps = {
  actualUser: {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

export default connect(mapStateToProps)(FacebookLoginButton);
