import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { selectQuestion } from '../../../actions/selectQuestion';
import saveQuestion from '../../../actions/saveQuestion';

class AdminSearchResult extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setQuestionnaireFK(questionnaire, title) {
    const subtitle = this.props.question.questionSubtitle;
    const description = this.props.question.questionDescription;
    const author = this.props.question.questionAuthor;
    const proposition = this.props.question.proposition;
    const questionnaireFK = 1;
    if (questionnaire === questionnaireFK) {
      this.questionnaire = null;
    } else {
      this.questionnaire = questionnaireFK;
    }
    swal({
      title: 'Você realmente deseja acrescentar essa questão ao questionário?',
      text: title,
      buttons: {
        confirm: true,
        cancel: true,
      },
    }).then(function (result) {
      if (result.value) {
        if (title === this.props.question.questionTitle) {
          return (
            saveQuestion(title, subtitle, description, author, proposition, questionnaire)
          );
        }
      }
      return saveQuestion(title, subtitle, description, author, proposition, questionnaire);
    });
  }

  selectedQuestion(quest) {
    this.props.selectQuestion(quest);
  }

  renderQuestionsTitle() {
    const quest = 1;
    return this.props.adminSearchResult.map((data) => {
      return (
        <li
          id="quest-item"
          className="collection-item"
          key={data[quest].questionTitle}
          onClick={() => this.setQuestionnaireFK(
            data[quest].questionnaireFK,
            data[quest].questionTitle)}
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
  question: ([]),
};

AdminSearchResult.propTypes = {
  adminSearchResult: PropTypes.array,
  selectQuestion: PropTypes.func,
  question: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

function mapStateToProps(state) {
  return {
    question: state.questionData,
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
