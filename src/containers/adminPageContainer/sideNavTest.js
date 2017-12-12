import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideNav from 'react-simple-sidenav';
import AdminListPropositions from './adminListPropositions';

class SideNavTest extends Component {

  static renderPropositionsList() {
    return (
      <div className="scrollbar">
        <AdminListPropositions />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ showNav: true })}
          className="btn black purple-text text-accent-3"
        >Proposições</button>
        <SideNav
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
          title="Proposições"
          items={[
            <div>
              {SideNavTest.renderPropositionsList()}
            </div>,
          ]}
          titleStyle={{ backgroundColor: 'purple' }}
          itemStyle={{ backgroundColor: '#fff' }}
          itemHoverStyle={{ backgroundColor: 'white' }}
        />
      </div>
    );
  }
}

SideNavTest.propTypes = {
  showNav: PropTypes.func,
};

SideNavTest.defaultProps = {
  showNav() {},
};

export default SideNavTest;
