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
    console.log(this.props.answeredQuestions);
    return this.props.answeredQuestions.map((answered) => {
      return (
        <li key={answered.answerID} className="list-group-item"> {answered.answer}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          { this.listAnswer() }
        </ul>
      </div>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
};

ListAnsweredQuestions.defaultProps = {
  answeredQuestions: [{
    answerID: 0,
    answer: 'answer',
  }],
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
