import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { selectParlamentary } from '../../actions/selectParlamentary';

class SearchResult extends Component {


  selectedParlamentary(deputy) {
    this.props.selectParlamentary(deputy);
    browserHistory.push('/showParlamentary');
  }

  renderNames() {
    return this.props.searchResult.map((deputy) => {
      const NAME = 0;
      const ID = 1; // Position of ID
      return (
        <li
          className="collection-item"
          key={deputy[ID]}
          onClick={() => this.selectedParlamentary(deputy)}
        >
          <div>
            <i className="material-icons">
              account_circle
            </i>
            <br />
            {deputy[NAME]}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="colllection">
        {this.renderNames()}
      </ul>
    );
  }
}

SearchResult.defaultProps = {
  searchResult: ['Não encontrado'],
};

SearchResult.propTypes = {
  searchResult: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    parlamentariansData: state.parlamentariansData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectParlamentary(deputy) {
      dispatch(selectParlamentary(deputy));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
