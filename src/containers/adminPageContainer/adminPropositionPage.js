import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchPropositionData } from '../../actions/fetchPropositionData';

class AdminPropositionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPropositionData();
  }

  render() {
    // console.log(this.props.proposition);
    return (
      <div>
        AdminPropositionPage
      </div>
    );
  }
}

AdminPropositionPage.propTypes = {
  proposition: PropTypes.object,
  fetchPropositionData: PropTypes.func,
};

AdminPropositionPage.defaultProps = {
  proposition: {
    propositionID: 0,
    propositionTitle: 'Proposition Title',
    propositionSubTitle: 'Proposition SubTitle',
    propositionDescription: 'Proposition Description',
    propositionAuthor: 'Proposition Author',
  },
  fetchPropositionData() {},
};


function mapStateToProps(state) {
  return {
    proposition: state.proposition,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPropositionData() {
      dispatch(FetchPropositionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPropositionPage);
