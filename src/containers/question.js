import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SaveAnswerQuestion } from '../actions/saveAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  verifyAnswerInAnsweredQuestions(questions, answer) {
    this.props.sendAnswer(questions, answer);

    if (this.props.actualQuestionID < 9) {
      this.props.sendID(this.props.actualQuestionID + 1);
    }
  }

  render() {
    const ID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    const actionID = question[ID].questionID;

    return (
      <div className="card" id="question-card">
        <div className="card-content yellow accent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { question[ID].questionID }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ question[ID].questionTitle }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ question[ID].questionSubTitle }</p>
            <ul>
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, { answerID: actionID, answer: 'SIM' })}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, { answerID: actionID, answer: 'NÃO' })}>
                Sou contra</a></li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, { answerID: actionID, answer: 'ME ABSTENHO' })}>
                Me abstenho</a></li>
            </ul>
          </center>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{ question[ID].questionTitle }<i className="material-icons right">close</i></span>
          <p>{ question[ID].questionDescription }</p>
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
    sendID(ID) {
      dispatch(SaveActualQuestionID(ID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
