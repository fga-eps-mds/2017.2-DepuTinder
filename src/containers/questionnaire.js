import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import Question from './question';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  isEmpty() {
    if (this.props.questionData.questions === undefined) {
      this.props.getDataForQuestion();
    }
  }

  render() {
    this.isEmpty();
    return (
      <Question />
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
