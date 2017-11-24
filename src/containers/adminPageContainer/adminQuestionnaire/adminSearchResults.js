import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectQuestion } from '../../../actions/selectQuestion';

class AdminSearchResult extends Component {

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
          key={data[quest].fields.name}
        >
          <div>
            {data[quest].fields.name}
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
