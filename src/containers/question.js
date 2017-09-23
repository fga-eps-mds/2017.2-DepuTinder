import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SaveAnswerQuestion } from '../actions/saveAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = { answeredQuestions: [] };
  }

  verifyAnswerInAnsweredQuestions(questions, answerID, answerValue) {
    const MAX_INDEX_QUESTION_ARRAY = 9;
    const NEXT_QUESTION = 1;
    const answer = {
      answerID,
      answer: answerValue,
    };
    this.props.sendAnswer(questions, answer);
    if (this.props.actualQuestionID < MAX_INDEX_QUESTION_ARRAY) {
      this.props.sendID(this.props.actualQuestionID + NEXT_QUESTION);
    }
    this.render();
  }

  render() {
    const questionID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    const actionID = question[questionID].questionID;
    return (
      <div className="card" id="question-card">
        <div className="card-content yellow accent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { question[questionID].questionID }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ question[questionID].questionTitle }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ question[questionID].questionSubTitle }</p>
            <ul>
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'SIM')}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'NÃO')}>
                Sou contra</a></li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'ME ABSTENHO')}>
                Me abstenho</a></li>
            </ul>
          </center>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{ question[questionID].questionTitle }<i className="material-icons right">close</i></span>
          <p>{ question[questionID].questionDescription }</p>
          <a className="proposition-link" href="">Saiba mais(link para a descrição)</a>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  actualQuestionID: PropTypes.number,
  questionData: PropTypes.object,
  sendAnswer: PropTypes.func,
  answeredQuestions: PropTypes.array,
  sendID: PropTypes.func,
};

Question.defaultProps = {
  actualQuestionID: 0,
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
  sendAnswer() {},
  answeredQuestions: [],
  sendID() {},
};

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
    actualQuestionID: state.actualQuestionID,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchQuestionData());
    },
    sendAnswer(question, answer) {
      dispatch(SaveAnswerQuestion(question, answer));
    },
    sendID(questionID) {
      dispatch(SaveActualQuestionID(questionID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
