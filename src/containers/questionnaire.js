import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FetchPropositionData } from '../actions/fetchPropositionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';
import Question from './question';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getDataForQuestion();
  }


  proxNumber() {
    if (this.props.actualQuestionID < 9) {
      return this.props.actualQuestionID + 1;
    }
    return 0;
  }

  prevNumber() {
    if (this.props.actualQuestionID > 0) {
      return this.props.actualQuestionID - 1;
    }
    return 9;
  }

  pages() {
    return (
      <ul className="pagination" id="questionnairePagination">
        <li
          className="disabled"
          onClick={() => this.props.sendID(this.prevNumber())}
        ><i className="material-icons" id="questionnairePaginationIconRight">chevron_left</i></li>
        <li className="waves-effect btn black" id="questionnairePaginationButton1" onClick={() => this.props.sendID(0)}>1</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton2" onClick={() => this.props.sendID(1)}>2</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton3" onClick={() => this.props.sendID(2)}>3</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton4" onClick={() => this.props.sendID(3)}>4</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton5" onClick={() => this.props.sendID(4)}>5</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton6" onClick={() => this.props.sendID(5)}>6</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton7" onClick={() => this.props.sendID(6)}>7</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton8" onClick={() => this.props.sendID(7)}>8</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton9" onClick={() => this.props.sendID(8)}>9</li>
        <li className="waves-effect btn black" id="questionnairePaginationButton10" onClick={() => this.props.sendID(9)}>10</li>
        <li
          className="waves-effect"
          onClick={() => this.props.sendID(this.proxNumber())}
        ><i className="material-icons" id="questionnairePaginationIconRight">chevron_right</i></li>
      </ul>
    );
  }

  sendButton() {
    if (this.props.answeredQuestions.length === 10) {
      return 'btn waves-effect black waves-light';
    }
    return 'btn waves-effect waves-light disabled';
  }

  render() {
    if (this.props.propositions.length === 0) {
      return (
        <div className="questionnaireBody">
          <center>{this.pages()}</center>
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="questionnaireBody">
          <div className="questionBody">
            <Question />
            <center>
              <button id="questionnaireSendButton"className={this.sendButton()} onClick={() => browserHistory.push('/listar_respostas')}>Enviar questionário
               <i className="material-icons right" id="sendIcon">send</i>
              </button>
            </center>
          </div>
        </div>
      );
    }
  }
}

Questionnaire.propTypes = {
  propositions: PropTypes.array,
  getDataForQuestion: PropTypes.func,
  actualQuestionID: PropTypes.number,
  sendID: PropTypes.func,
  answeredQuestions: PropTypes.array,
};

Questionnaire.defaultProps = {
  propositions: [],
  getDataForQuestion() {},
  actualQuestionID: 0,
  sendID() {},
  answeredQuestions: [],
};

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    propositions: state.propositions,
    actualQuestionID: state.actualQuestionID,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchPropositionData());
    },
    sendID(questionID) {
      dispatch(SaveActualQuestionID(questionID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
