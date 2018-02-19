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
    return this.props.propositions.map((data) => {
      return (
        <div className="row" key={data.propositionTitle}>
          <div className="col s12 m12">
            <div
              className="card black-text"
              id="cardSideNav"
            >
              <div><b>Título:&nbsp;</b>{data.propositionTitle}</div>
              <div><b>Descrição:&nbsp;</b>{data.propositionDescription}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const EMPTY = 0;
    if (Object.keys(this.props.propositions).length !== EMPTY) {
      return (
        <div>
          {this.renderPropositions()}
        </div>
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
    propositions: state.propositions,
  };
}


AdminListPropositions.propTypes = {
  getResults: PropTypes.func,
  propositions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

AdminListPropositions.defaultProps = {
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


export default connect(mapStateToProps, mapDispatchToProps)(AdminListPropositions);
