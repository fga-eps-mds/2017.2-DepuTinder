import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FetchPropositionData from '../../actions/fetchPropositionData';

class AdminListPropositions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getResults();
  }

  render() {
    console.log(this.props.proposition);
    console.log(this.props.proposition.propositions);
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li><div className="user-view">
            <a href="#!name"><span className="white-text name">John Doe</span></a>
            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <button href="#" data-activates="slide-out" className="button-collapse waves-effect waves-light btn black yellow-text text-accent-3"><i className="material-icons">menu</i></button>
      </div>
    );
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
