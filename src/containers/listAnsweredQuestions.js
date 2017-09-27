import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListAnsweredQuestions extends Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const answeredQuestions = this.props.answeredQuestions.sort();
    const questionData = this.props.questionData.questions;
    const questionID = this.props.questionID;
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons black-text">person</i>Votação {questionID}: {questionData[questionID].questionTitle}</div>
        <div className="collapsible-body"><span>{ questionData[questionID].questionDescription }</span></div>
        <div className="collapsible-body"><span>{ answeredQuestions[questionID].answer }</span></div>
      </li>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  questionData: PropTypes.object,
  questionID: PropTypes.string,
};

ListAnsweredQuestions.defaultProps = {
  answeredQuestions: [{
    answerID: 0,
    answer: 'answer',
  }],
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
  questionID: '0',
};


function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
  };
}

export default connect(mapStateToProps)(ListAnsweredQuestions);
