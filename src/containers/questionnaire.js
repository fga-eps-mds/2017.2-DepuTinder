import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import { SaveActualQuestionID } from '../actions/saveActualQuestionID';
import Question from './question';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { a: 0, b: ['dasd', '12323'] };
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

  render() {
    this.isEmpty();
    return (
      <div>
        <center>{this.pages()}</center>
        { this.props.questionData.questions === undefined ?
          <div className="progress">
            <div className="indeterminate" />
          </div>
       : <Question />
       }
      </div>
    );
  }
}

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
    sendID(ID) {
      dispatch(SaveActualQuestionID(ID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
