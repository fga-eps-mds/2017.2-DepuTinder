import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SaveAnswerQuestion } from '../actions/saveAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = { answerYes: false, answerNo: false, answerAbstain: false };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setButton(answer) {
    if (answer) {
      return 'waves-effect waves-light btn green darken-3';
    } else {
      return 'waves-effect waves-light btn grey darken-3';
    }
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
    } else {
      this.props.sendID(0);
    }
  }

  tick() {
    const answered = this.props.answeredQuestions;

    for (let i = 0; i < answered.length; i += 1) {
      i = this.changeStatusOfButton(i, answered);
    }
  }

  changeStatusOfButton(ID, answered) {
    const answeredID = ID;
    if (answered[answeredID].answerID === (this.props.actualQuestionID + 1)) {
      if (answered[answeredID].answer === 'SIM') {
        this.setState({ answerYes: true });
        this.setState({ answerNo: false });
        this.setState({ answerAbstain: false });
      } else if (answered[answeredID].answer === 'NÃO') {
        this.setState({ answerYes: false });
        this.setState({ answerNo: true });
        this.setState({ answerAbstain: false });
      } else {
        this.setState({ answerYes: false });
        this.setState({ answerNo: false });
        this.setState({ answerAbstain: true });
      }
      return answered.length;
    } else {
      this.setState({ answerYes: false });
      this.setState({ answerNo: false });
      this.setState({ answerAbstain: false });
    }
    return answeredID;
  }

  render() {
    const questionID = this.props.actualQuestionID;
    const question = this.props.proposition.questions;
    const actionID = question[questionID].questionID;

    return (
      <div className="card" id="question-card">
        <div className="card-content yellow accent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { question[questionID].questionID }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ question[questionID].questionTitle }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ question[questionID].questionSubTitle }</p>
            <ul>
              <li><a className={this.setButton(this.state.answerYes)} onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'SIM')}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className={this.setButton(this.state.answerNo)} onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'NÃO')}>
                Sou contra</a></li>
              <br />
              <li><a className={this.setButton(this.state.answerAbstain)} onClick={() => this.verifyAnswerInAnsweredQuestions(this.props.answeredQuestions, actionID, 'ME ABSTENHO')}>
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
  proposition: PropTypes.object,
  sendAnswer: PropTypes.func,
  answeredQuestions: PropTypes.array,
  sendID: PropTypes.func,
};

Question.defaultProps = {
  actualQuestionID: 0,
  proposition: {
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
    proposition: state.proposition,
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
