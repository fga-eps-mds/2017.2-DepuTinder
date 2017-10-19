import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchParlamentariansData } from '../../actions/fetchParlamentariansData';


class SearchParlamentary extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchParlamentariansData();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s3" />
          <div className="col s6" />
          <div className="col s3" />
        </div>
        <div className="row" />
      </div>
    );
  }
}

SearchParlamentary.propTypes = {
  fetchParlamentariansData: PropTypes.func,
};

SearchParlamentary.defaultProps = {
  fetchParlamentariansData() {},
};

function mapStateToProps(state) {
  return {
    parlamentariansData: state.parlamentariansData,
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
