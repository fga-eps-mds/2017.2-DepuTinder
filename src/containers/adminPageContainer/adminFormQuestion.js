import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import saveQuestion from '../../actions/saveQuestion';
import { FetchPropositionData } from '../../actions/fetchPropositionData';


/*-------------------------------------------*/
const getSuggestions = (value, pp) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : pp.filter((p) => {
    return p.propositionTitle.toLowerCase().slice(0, inputLength) === inputValue;
  });
};
/*-------------------------------------------*/
const getSuggestionValue = suggestion => suggestion.propositionTitle;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.propositionTitle}
  </div>
);
/*-------------------------------------------*/

class AdminFormQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', subtitle: '', description: '', author: '', value: '', suggestions: [] };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubTitleChange = this.handleSubTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getResults();
  }

/*-------------------------------------------*/
  onSuggestionsFetchRequested = ({ value }) => {
    const pp = this.props.propositions;
    this.setState({
      suggestions: getSuggestions(value, pp),
    });
  };
/*-------------------------------------------*/

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
/*-------------------------------------------*/

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };
/*-------------------------------------------*/


  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubTitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleSubmit() {
    this.event.preventDefault();
  }

  renderPropositions() {
    return this.props.propositions.map((data) => {
      return (
        <div className="row" key={data.propositionTitle}>
          <div>Título: {data.propositionTitle}</div>
        </div>
      );
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Proposicao',
      value,
      onChange: this.onChange,
    };
    return (
      <div>
        <div className="card-content white accent-3">
          <i className="material-icons activator right" id="cardHelpIcon">help</i>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="input-field col s12" id="autocompleteTitle">
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputTitle">
                  <input
                    id="questionTitle"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    data-length="50"
                  />
                  <label htmlFor="questionTitle">Titulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputSubtitle">
                  <input
                    id="questionSubTitle"
                    type="text"
                    value={this.state.subtitle}
                    onChange={this.handleSubTitleChange}
                    data-length="50"
                  />
                  <label htmlFor="questionSubTitle">SubTitulo</label>
                </div>
                <div className="row">
                  <div className="input-field col s12" id="inputSubtitle">
                    <input
                      id="questionAuthor"
                      type="text"
                      value={this.state.author}
                      onChange={this.handleAuthorChange}
                      data-length="50"
                    />
                    <label htmlFor="questionAuthor">Autor(a)</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputDescription">
                  <textarea
                    id="questionDescription"
                    className="materialize-textarea"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    data-length="120"
                  />
                  <label htmlFor="questionDescription">Descrição</label>
                </div>
              </div>
            </div>
            <a
              className="waves-effect waves-light btn black yellow-text text-accent-3"
              id="saveQuestionButton"
              onClick={() =>
                saveQuestion(
                  this.state.title, this.state.subtitle, this.state.description, this.state.author)}
            >Submit
           </a>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    propositions: state.propositions,
  };
}

AdminFormQuestion.propTypes = {
  getResults: PropTypes.func,
  propositions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

AdminFormQuestion.defaultProps = {
  getResults() {},
  propositions: ([]),
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchPropositionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFormQuestion);
