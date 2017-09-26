import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListAnsweredQuestions extends Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  listQuestionsAndAnswers() {
    const questions = this.props.questionData.questions;
    const answers = this.props.answeredQuestions;
    const NUMBER_OF_QUESTIONS = 10;
    const questionsAndAnswers = [{}];

    let i = 0;
    while (i < NUMBER_OF_QUESTIONS) {
      if (questions[i].questionID === answers[i].answerID) {
        const questionAndAnswer = {
          questionID: questions[i].questionID,
          questionTitle: questions[i].questionTitle,
          questionSubTitle: questions[i].questionSubTitle,
          questionDescription: questions[i].questionDescription,
          answer: answers[i].answer,
        };
        questionsAndAnswers[i] = (questionAndAnswer);
      }
      i += 1;
    }

    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    );
  }

  render() {
    return (
      <ul className="collapsible yellow" data-collapsible="accordion">
        <li>
          <div className="collapsible-header active"><i className="material-icons">filter_drama</i>First</div>
          <div className="collapsible-body yellow"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  questionData: PropTypes.object,
  questionsAndAnswers: PropTypes.arrayOf(PropTypes.object),
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
  questionsAndAnswers: [{
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
    questionAnswer: 'Answer',
  }],
};

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
    answeredQuestions: state.answeredQuestions,
  };
}

export default connect(mapStateToProps)(ListAnsweredQuestions);
