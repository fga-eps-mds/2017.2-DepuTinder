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
    const deputy = 1;
    return this.props.searchResult.map((data) => {
      return (
        <li
          id="deputy-item"
          className="collection-item"
          key={data[deputy].fields.name}
          onClick={() => this.selectedParlamentary(data[deputy])}
        >
          <div>
            <i className="material-icons">
              account_circle
            </i>
            <br />
            {data[deputy].fields.name}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderNames()}
      </ul>
    );
  }
}

SearchResult.defaultProps = {
  searchResult: ['Não encontrado'],
  selectParlamentary() {},
};

SearchResult.propTypes = {
  searchResult: PropTypes.array,
  selectParlamentary: PropTypes.func,
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
