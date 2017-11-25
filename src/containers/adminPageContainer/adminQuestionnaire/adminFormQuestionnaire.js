import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchQuestionData } from '../../../actions/fetchQuestionData';
import AdminSearchResult from './adminSearchResults';

class AdminFormQuestionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { searchQuestions: '', searchResult: [] };
    this.searchAlgorithm = this.searchAlgorithm.bind(this);
  }

  componentWillMount() {
    this.props.fetchQuestionData();
  }

  handleChange(searchQuestions) {
    this.setState({ searchQuestions });
    this.searchAlgorithm();
  }

  searchAlgorithm() {
    const input = this.state.searchQuestions;
    const regex = new RegExp(`${input}.+$`, 'i');
    const name = 0;
    const questionResult = this.props.questionSearch.filter((question) => {
      return question[name].search(regex) !== -1;
    });
    if (questionResult.length >= 0) {
      const resultArray = questionResult.slice(0, 5);
      this.setState({ searchResult: resultArray });
    }
  }


  render() {
    return (
      <div className="AdminFormQuestionnaire">
        <div className="row">
          <div className="input-field col s12" id="inputQuestions">
            <input
              id="searchQuestions"
              type="search"
              className="validate"
              value={this.state.searchQuestions}
              onChange={event => this.handleChange(event.target.value)}
            />
            <label htmlFor="questionTitle">Pesquise uma questão</label>
          </div>
        </div>
        <AdminSearchResult adminSearchResult={this.state.searchResult} />
      </div>
    );
  }
}

AdminFormQuestionnaire.propTypes = {
  fetchQuestionData: PropTypes.func,
  questionSearch: PropTypes.array,
};

AdminFormQuestionnaire.defaultProps = {
  fetchQuestionData() {},
  questionSearch: ['Nao Encontrado'],
};

function mapStateToProps(state) {
  return {
    questionSearch: state.questionSearch,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestionData() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFormQuestionnaire);
