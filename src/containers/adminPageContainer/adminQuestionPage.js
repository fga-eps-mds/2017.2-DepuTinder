import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import SideNav from 'react-simple-sidenav';
import AdminListPropositions from './adminListPropositions';
import AdminFormQuestion from './adminFormQuestion';
import AdminRevealCardQuestion from './adminRevealCardQuestion';

class AdminQuestionPage extends Component {

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
      <div className="adminQuestionPage">
        <div
          id="titleAdminQuestion"
        ><br />
        Criar Questão
        </div>
        <br />
        <div className="row">
          <div className="col s6 m6 l6">
            <center>
              <div className="card" id="cardQuestionAdmin">
                <AdminFormQuestion />
                <AdminRevealCardQuestion />
              </div>
            </center>
          </div>
        </div>
        <div className="row" id="adminQuestionButtonsRow">
          <div className="col s6 m6 l6" id="backButtonCollumn">
            <center>
              <a
                className="waves-effect waves-light btn black white-text text-accent-3"
                id="backButton"
                onClick={() => browserHistory.push('/admin')}
              >
                <i className="material-icons left" id="backButtonIcon">arrow_back</i>Voltar
              </a>
            </center>
          </div>
          <div>
            <center>
              <button
                onClick={() => this.setState({ showNav: true })}
                className="btn black white-text text-accent-3"
              >Proposições</button>
              <SideNav
                showNav={this.state.showNav}
                onHideNav={() => this.setState({ showNav: false })}
                title={<div />}
                items={[
                  <div>
                    {AdminQuestionPage.renderPropositionsList()}
                  </div>,
                ]}
                titleStyle={{ backgroundColor: '#fff' }}
                itemStyle={{ backgroundColor: '#fff' }}
                itemHoverStyle={{ backgroundColor: 'white' }}
              />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

AdminQuestionPage.propTypes = {
  showNav: PropTypes.func,
};

AdminQuestionPage.defaultProps = {
  showNav() {},
};


export default AdminQuestionPage;
