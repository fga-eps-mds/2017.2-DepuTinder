import { connect } from 'react-redux';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="userPage">
        <center>
          <h4>{ this.props.actualUser.data.userName }</h4>
          <h4>{ this.props.actualUser.data.userEmail }</h4>
          <a
            onClick={() => browserHistory.push('/editAccountForm')}
            className="waves-effect waves-light btn black text-accent-3"
            id="answerQuestionnaireButton"
          >Alterar
          </a>
        </center>
      </div>
    );
  }
}

UserPage.propTypes = {
  actualUser: PropTypes.obj,
};

UserPage.defaultProps = {
  actualUser: {},
};

function mapStateToProps(state) {
  return {
    actualUser: state.actualUser,
  };
}

export default connect(mapStateToProps)(UserPage);
