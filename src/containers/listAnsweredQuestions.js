import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveAnswerQuestion } from '../actions/saveAnswerQuestion';

class ListAnsweredQuestions extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  listAnswer() {
    return this.props.answeredQuestions.map((answered) => {
      return (
        <li key={answered.answerID} className="list-group-item"> {answered.answer}</li>
      );
    });
  }

  listQuestion() {
    return this.props.questionData.questions.map((questions) => {
      return (
        <li key={questions.questionID} className="list-group-item"> {questions.questionTitle}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          { this.listAnswer() }
          { this.listQuestion() }
        </ul>
      </div>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  questionData: PropTypes.object,
};

ListAnsweredQuestions.defaultProps = {
  answeredQuestions: [{
    answerID: 0,
    answer: 'answer',
  }],
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
};

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
    answeredQuestions: state.answeredQuestions,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchQuestionData);
    },
    sendAnswer(answeredQuestions, answer) {
      dispatch(SaveAnswerQuestion(answeredQuestions, answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAnsweredQuestions);
