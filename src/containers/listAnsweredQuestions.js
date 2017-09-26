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
    for (let i = 0; i < 10; i += 1) {
      if (questions[i].questionID === answers[i].answerID) {
        return (
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>
                  Votação {questions[i].questionID} {questions[i].questionTitle}
              </div>
              <div className="collapsible-body">
                <span>{questions[i].questionSubTitle}</span>
              </div>
              <div className="collapsible-header">
                <span>{answers[i].answer}</span>
              </div>
            </li>
          </ul>
        );
      }
    }
    return 0;
  }

  render() {
    return (
      <div>
        <ul>
          { this.listQuestionsAndAnswers() }
        </ul>
      </div>
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
