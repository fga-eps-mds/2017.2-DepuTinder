import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListAnsweredQuestions from './listAnsweredQuestions';

class AnsweredQuestionsPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1 className="center">Respostas</h1>
        <ul className="collapsible" data-collapsible="accordion">
          <ListAnsweredQuestions questionID="0" />
          <ListAnsweredQuestions questionID="1" />
          <ListAnsweredQuestions questionID="2" />
          <ListAnsweredQuestions questionID="3" />
          <ListAnsweredQuestions questionID="4" />
          <ListAnsweredQuestions questionID="5" />
          <ListAnsweredQuestions questionID="6" />
          <ListAnsweredQuestions questionID="7" />
          <ListAnsweredQuestions questionID="8" />
          <ListAnsweredQuestions questionID="9" />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
  };
}

export default connect(mapStateToProps)(AnsweredQuestionsPanel);
