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

  listQuestion() {
    return this.props.answeredQuestions.map((answerID, answer) => {
      return (
        <li className="list-group-item"> {answer}</li>
      );
    });
  }

  render() {
    console.log(this.props.answeredQuestions);
    return (
      <div>
        <ul>
          { this.listQuestion() }
        </ul>
      </div>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  questionData: PropTypes.object,
};

ListAnsweredQuestions.defaultProps = {
  actualQuestionID: 0,
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
