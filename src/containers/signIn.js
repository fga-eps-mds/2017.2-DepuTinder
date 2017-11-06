import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1> SignIn </h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    propositions: state.propositions,
  };
}

export default connect(mapStateToProps)(SignIn);
