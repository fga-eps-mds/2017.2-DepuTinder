import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectQuestion } from '../../../actions/selectQuestion';
import { addQuestion } from '../../../actions/addQuestion';

class AdminSearchResult extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setQuestionnaireFK(data) {
    const questionnaireFK = 1;
    if (data === questionnaireFK) {
      this.data = null;
    } else {
      this.data = questionnaireFK;
    }
  }
  selectedQuestion(quest) {
    this.props.selectQuestion(quest);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleQuestionnaireChange(event) {
    this.setState({ questionnaire: event.target.value });
  }

  renderQuestionsTitle() {
    const quest = 1;
    return this.props.adminSearchResult.map((data) => {
      return (
        <li
          id="quest-item"
          className="collection-item"
          key={data[quest].questionTitle}
          onClick={() => this.setQuestionnaireFK(data[quest].questionnaireFK)}
        >
          <div>
            {data[quest].questionTitle}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderQuestionsTitle()}
      </ul>
    );
  }
}

AdminSearchResult.defaultProps = {
  adminSearchResult: ['Não encontrado'],
  selectQuestion() {},
};

AdminSearchResult.propTypes = {
  adminSearchResult: PropTypes.array,
  selectQuestion: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    questionData: state.questionData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectQuestion(quest) {
      dispatch(selectQuestion(quest));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminSearchResult);
