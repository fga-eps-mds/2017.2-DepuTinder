import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AdminListPropositions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>ListPropositions</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    proposition: state.proposition,
  };
}


AdminListPropositions.propTypes = {
  proposition: PropTypes.object,
};

AdminListPropositions.defaultProps = {
  getResults() {},
  proposition: {
    propositionID: 0,
    propositionTitle: 'Proposition Title',
    propositionSubTitle: 'Proposition SubTitle',
    propositionDescription: 'Proposition Description',
    propositionAuthor: 'Proposition Author',
  },
};


export default connect(mapStateToProps)(AdminListPropositions);
