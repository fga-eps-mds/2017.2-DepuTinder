import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AdminPage">
        <center>
          <i className="large material-icons" id="accountIcon">account_box</i>
          <p id="paragraph_home_page">
          Lorem ipsum dolor sit amet, malorum tibique hendrerit pri cu.
          Ne utinam deleniti detraxit mel. Vel affert verear ne, iudico
          voluptua intellegat. Cetero malorum theophrastus mea ex, tempor
          voluptaria philosophia vel ne.
          </p>
          <div className="row" id="adminPageButtonsRow">
            <div className="col s6 m6 l6" id="questionButtonCollumn">
              <a
                onClick={() => browserHistory.push('/admin/criarQuestao')}
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="elaborateQuestionButton"
              >Questão
              </a>
            </div>
            <div className="col s6 m6 l6" id="questionnaireButtonCollumn">
              <a
                onClick={() => browserHistory.push('/admin/criarQuestionario')}
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="elaborateQuestionnaireButton"
              >Questionário
              </a>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default AdminPage;
