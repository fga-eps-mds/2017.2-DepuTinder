import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchAnswerQuestion } from '../actions/fetchAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCard() {
    const ID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    return (
      <div className="card" id="question-card">
        <div className="card-content yellow acent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { question[ID].questionID }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ question[ID].questionTitle }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ question[ID].questionSubTitle }</p>
            <ul>
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ ID, answer: 'SIM' })}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ ID, answer: 'NÃO' })}>
                Sou contra</a></li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ ID, answer: 'ME ABSTENHO' })}>
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
