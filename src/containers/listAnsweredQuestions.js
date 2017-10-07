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
    const answeredQuestions = this.props.answeredQuestions.sort((a, b) => {
      return a.answerID > b.answerID;
    });
    const propositions = this.props.propositions.propositions;
    const questionID = this.props.questionID;
    return (
      <li id={`answeredQuestionRow${questionID}`}>
        <div className="collapsible-header" id={`answeredQuestionCollapsibleHeader${questionID}`}>
          <i className="material-icons green-text" id={`collapsibleRowIcon${questionID}`}>verified_user</i>
          Votação {Number(questionID) + 1}: {propositions[questionID].propositionTitle}
          : { answeredQuestions[questionID].answer }
        </div>
        <div className="collapsible-body" id={`answeredQuestionCollapsibleBody${questionID}`}>
          <span id={`answeredQuestionCollapsibleBodySpan${questionID}`}>
            {propositions[questionID].propositionDescription}
          </span>
        </div>
      </li>
    );
  }
}

ListAnsweredQuestions.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  propositions: PropTypes.object,
  questionID: PropTypes.string,
};

ListAnsweredQuestions.defaultProps = {
  answeredQuestions: [{
    answerID: 0,
    answer: 'answer',
  }],
  propositions: {
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
    propositions: state.proposition,
  };
}

export default connect(mapStateToProps)(ListAnsweredQuestions);
