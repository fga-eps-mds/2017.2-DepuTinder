import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AdminListPropositions from './adminListPropositions';
import AdminFormQuestion from './adminFormQuestion';
import AdminRevealCardQuestion from './adminRevealCardQuestion';

class AdminQuestionPage extends Component {

  static renderPropositionsList() {
    return (
      <div>
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
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="backButton"
                onClick={() => browserHistory.push('/admin')}
              >
                <i className="material-icons left" id="backButtonIcon">arrow_back</i>Voltar
              </a>
            </center>
          </div>
          <div>
            <center>
              <ul id="slide-out" className="side-nav yellow-text" >
                {AdminQuestionPage.renderPropositionsList()}
              </ul>
              <button href="#" data-activates="slide-out" className="button-collapse waves-effect waves-light btn black yellow-text text-accent-3">Proposições</button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminQuestionPage;
