import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchParlamentariansData } from '../../actions/fetchParlamentariansData';
import SearchResult from './searchResult';

class SearchParlamentary extends Component {

  constructor(props) {
    super(props);
    this.state = { searchParams: '', searchResult: [] };
    this.searchAlgorithm = this.searchAlgorithm.bind(this);
  }

  componentWillMount() {
    this.props.fetchParlamentariansData();
  }

  handleChange(searchParams) {
    this.setState({ searchParams });
    this.searchAlgorithm();
  }

  searchAlgorithm() {
    const input = this.state.searchParams;
    const regex = new RegExp(`${input}.+$`, 'i');
    const name = 0;
    const parlamentaryResult = this.props.parlamentariansSearch.filter((parlamentary) => {
      return parlamentary[name].search(regex) !== -1;
    });
    if (parlamentaryResult.length >= 0) {
      const resultArray = parlamentaryResult.slice(0, 5);
      this.setState({ searchResult: resultArray });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s3">
            <br />
          </div>
          <div className="col s6">
            <input
              id="searchParams"
              type="search"
              className="validate"

              value={this.state.searchParams}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
          <div className="col s3">
            <br />
          </div>
        </div>
        <div className="row" />
        <SearchResult searchResult={this.state.searchResult} />
      </div>
    );
  }
}

SearchParlamentary.propTypes = {
  fetchParlamentariansData: PropTypes.func,
  parlamentariansSearch: PropTypes.array,
};

SearchParlamentary.defaultProps = {
  fetchParlamentariansData() {},
  parlamentariansSearch: ['Não Encontrado'],
};

function mapStateToProps(state) {
  return {
    parlamentariansSearch: state.parlamentariansSearch,
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchParlamentariansData() {
      dispatch(fetchParlamentariansData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchParlamentary);
