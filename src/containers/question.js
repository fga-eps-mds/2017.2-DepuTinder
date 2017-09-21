import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchAnswerQuestion } from '../actions/fetchAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClickedYes: false,
      isClickedNo: false,
      isClickedAbstain: false,
    };
  }

  checkClick(isClicked) {
    if (isClicked) {
      return 'waves-effect waves-light btn green darken-3';
    } else {
      return 'waves-effect waves-light btn grey darken-3';
    }
  }

  verifyButton(flag) {
    if (flag === 1) {
      this.setState({ isClickedYes: true });
      this.setState({ isClickedNo: false });
      this.setState({ isClickedAbstain: false });
    } else if (flag === 2) {
      this.setState({ isClickedYes: false });
      this.setState({ isClickedNo: true });
      this.setState({ isClickedAbstain: false });
    } else {
      this.setState({ isClickedYes: false });
      this.setState({ isClickedNo: false });
      this.setState({ isClickedAbstain: true });
    }
  }

  verifyAnswerInAnsweredQuestions(answer, flag) {
    const answeredQuestions = this.props.answeredQuestions;

    this.verifyButton(flag);

    if (answeredQuestions !== undefined) {
      for (let i = 0; i < answeredQuestions.length; i += 1) {
        if (answeredQuestions[i].actionID === answer.actionID) {
          return;
        }
      }
    }
    this.props.sendAnswer(answer);
  }

  renderCard() {
    const ID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    const actionID = question[ID].questionID;
    return (
      <div className="card" id="question-card">
        <div className="card-content yellow acent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { question[ID].questionID }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ question[ID].questionTitle }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ question[ID].questionSubTitle }</p>
            <ul>
              <li><a className={this.checkClick(this.state.isClickedYes)} onClick={() => this.verifyAnswerInAnsweredQuestions({ actionID, answer: 'SIM' }, 1)}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className={this.checkClick(this.state.isClickedNo)} onClick={() => this.verifyAnswerInAnsweredQuestions({ actionID, answer: 'NÃO' }, 2)}>
                Sou contra</a></li>
              <br />
              <li><a className={this.checkClick(this.state.isClickedAbstain)} onClick={() => this.verifyAnswerInAnsweredQuestions({ actionID, answer: 'ME ABSTENHO' }, 3)}>
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

  render() {
    return (
      <div>
        { this.props.questionData.questions === undefined ?
          <h1>assad</h1>
          : this.renderCard()
        }
      </div>
    );
  }
}


Question.propTypes = {
  actualQuestionID: PropTypes.number,
  questionData: PropTypes.object,
  sendAnswer: PropTypes.func,
  answeredQuestions: PropTypes.array,
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
    sendAnswer(answer) {
      dispatch(FetchAnswerQuestion(answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
