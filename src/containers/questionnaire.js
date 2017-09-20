import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchQuestionData } from '../actions/fetchQuestionData';
import Question from './question';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  isEmpty() {
    let a = 0;

    if (this.props.questionData.questions === undefined) {
      this.props.getDataForQuestion();
    } else {
      while (a < 10) {
        this.state.questions[a] = this.props.questionData.questions[a];
        a += 1;
      }
    }
  }

  render() {
    this.isEmpty();
    let a = 6;
    return (
      <div>
        { this.props.questionData.questions === undefined ?
          <div className="progress">
            <div className="indeterminate" />
          </div>
       : <Question id={this.props.questionData.questions[a].questionID}
         title={this.props.questionData.questions[a].questionTitle}
         subTitle={this.props.questionData.questions[a].questionSubTitle}
         questionDescription={this.props.questionData.questions[a].questionDescription}
       />
       }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
