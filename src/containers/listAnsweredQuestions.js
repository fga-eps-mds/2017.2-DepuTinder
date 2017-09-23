import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchAnswerQuestion } from '../actions/fetchAnswerQuestion';
import { FetchQuestionData } from '../actions/fetchQuestionData';

class ListAnsweredQuestions extends Component {

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

  listQuestion() {
    const ID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    return (
      <li>
        <div>
          question[ID].questionTitle
        </div>
      </li>
    );
  }

  render() {
    this.isEmpty();
    return (
      <div>
        <ul>
          {
            this.props.questionData.questions === undefined ?
              <div className="progress">
                <div className="indeterminate" />
              </div>
            : this.listQuestion()
          }
        </ul>
      </div>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  actualQuestionID: PropTypes.number,
  questionData: PropTypes.object,
};

ListAnsweredQuestions.defaultProps = {
  actualQuestionID: 0,
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataForQuestion() {
      dispatch(FetchQuestionData());
    },
    getAnswer(answer) {
      dispatch(FetchAnswerQuestion(answer));
    },
  };
};

export default connect(null, mapDispatchToProps)(ListAnsweredQuestions);
