import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListQuestionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  listQuestion() {
    const ID = this.props.actualQuestionID;
    const question = this.props.questionData.questions;
    return (
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">Votação{ question[ID].questionID }{ question[ID].questionTitle }</div>
          <div className="collapsible-body"><span>{ question[ID].questionSubTitle }</span></div>
          <div className="collapsible-body "><span>{ question[ID].questionDescription }</span></div>
        </li>
      </ul>
    );
  }

  render() {
    return {
    };
  }
}

ListQuestionnaire.propTypes = {
  actualQuestionID: PropTypes.number,
  questionData: PropTypes.object,
};

ListQuestionnaire.defaultProps = {
  actualQuestionID: 0,
  questionData: {
    questionID: 0,
    questionTitle: 'Question Title',
    questionSubTitle: 'Question SubTitle',
    questionDescription: 'Question Description',
  },
};


export default connect(ListQuestionnaire);
