import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchPropositionData } from '../../actions/fetchPropositionData';

class AdminListPropositions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getResults();
  }

  renderPropositions() {
    return this.props.proposition.propositions.map((data) => {
      return (
        <div>
          {data.propositionTitle}
        </div>
      );
    });
  }

  render() {
    const EMPTY = 0;
    if (Object.keys(this.props.proposition).length !== EMPTY) {
      console.log(this.props.proposition);
      console.log(this.props.proposition);
      return (
        <div>{this.renderPropositions()}</div>
      );
    } else {
      return (
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div><div className="gap-patch">
              <div className="circle" />
            </div><div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    proposition: state.proposition,
  };
}


AdminListPropositions.propTypes = {
  getResults: PropTypes.func,
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

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchPropositionData());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminListPropositions);
