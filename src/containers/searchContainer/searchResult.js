import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchResult extends Component {

  static selectDeputy(deputy) {
    return deputy;
  }

  renderNames() {
    return this.props.searchResult.map((deputy) => {
      const NAME = 0;
      const ID = 1; // Position of ID
      return (
        <li
          className="collection-item"
          key={deputy[ID]}
          onClick={() => SearchResult.selectDeputy(deputy)}
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

/*const SearchResult = (props) => {
  return (
    <ul className="collection">
      {renderNames(props)}
    </ul>
  );
};*/

export default connect(mapStateToProps, null)(SearchResult);
