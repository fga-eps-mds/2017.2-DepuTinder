import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';
import Question from './question';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  isEmpty() {
    if (this.props.questionData.questions === undefined) {
      this.props.getDataForQuestion();
    }
  }

  proxNumber() {
    if (this.props.actualQuestionID < 9) {
      return this.props.actualQuestionID + 1;
    }
    return this.props.actualQuestionID;
  }

  prevNumber() {
    if (this.props.actualQuestionID > 0) {
      return this.props.actualQuestionID - 1;
    }
    return this.props.actualQuestionID;
  }

  pages() {
    return (
      <ul className="pagination">
        <li
          className="disabled"
          onClick={() => this.props.sendID(this.prevNumber())}
        ><i className="material-icons">chevron_left</i></li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(0)}>1</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(1)}>2</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(2)}>3</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(3)}>4</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(4)}>5</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(5)}>6</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(6)}>7</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(7)}>8</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(8)}>9</li>
        <li className="waves-effect btn" onClick={() => this.props.sendID(9)}>10</li>
        <li
          className="waves-effect"
          onClick={() => this.props.sendID(this.proxNumber())}
        ><i className="material-icons">chevron_right</i></li>
      </ul>
    );
  }

  sendButton() {
    if (this.props.answeredQuestions.length === 10) {
      return 'btn waves-effect waves-light';
    }
    return 'btn waves-effect waves-light disabled';
  }

  render() {
    this.isEmpty();
    return (
      <div>
        <center>{this.pages()}</center>
        { (this.props.questionData.questions === undefined ?
          <div className="progress">
            <div className="indeterminate" />
          </div>
       : <div>
         <Question />
         <center>
           <button className={this.sendButton()}>Enviar questionário
             <i className="material-icons right">send</i>
           </button>
         </center>
       </div>
        )}
      </div>
    );
  }
}

Questionnaire.propTypes = {
  questionData: PropTypes.object,
  getDataForQuestion: PropTypes.func,
  actualQuestionID: PropTypes.number,
  sendID: PropTypes.func,
  answeredQuestions: PropTypes.array,
};

Questionnaire.defaultProps = {
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
  getDataForQuestion() {},
  actualQuestionID: 0,
  sendID() {},
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
    sendID(questionID) {
      dispatch(SaveActualQuestionID(questionID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
