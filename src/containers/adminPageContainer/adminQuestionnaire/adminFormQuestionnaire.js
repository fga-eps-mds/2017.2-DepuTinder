import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchQuestionData } from '../../../actions/fetchQuestionData';

class AdminFormQuestionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { searchQuestions: '', searchResult: [] };
    this.searchAlgorithm = this.searchAlgorithm.bind(this);
  }

  componentWillMount() {
    this.props.getResults();
  }

  handleChange(searchParams) {
    this.setState({ searchParams });
    this.searchAlgorithm();
  }

  handleSubmit() {
    this.event.preventDefault();
  }

  searchAlgorithm() {
    const input = this.state.searchQuestions;
    const regex = new RegExp(`${input}.+$`, 'i');
    const name = 0;
    const questionResult = this.props.question.data.filter((question) => {
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
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12" id="inputQuestions">
              <input
                id="searchQuestions"
                type="search"
                className="validate"
                value={this.state.searchQuestions}
                onChange={event => this.handleChange(event.target.value)}
              />
              <label htmlFor="questionTitle">Procure sua questão</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.questionData,
  };
}

AdminFormQuestionnaire.propTypes = {
  getResults: PropTypes.func,
  question: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

AdminFormQuestionnaire.defaultProps = {
  getResults() {},
  question: ([]),
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFormQuestionnaire);
