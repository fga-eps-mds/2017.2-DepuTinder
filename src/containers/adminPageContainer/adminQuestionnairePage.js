import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AdminQuestionnairePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          id="titleAdminQuestion"
        ><br />
        Criar Questionário
        </div>
        <br />
        <div className="row">
          <div className="col s12 m6">
            <div className="card-content white accent-3">
              esse é o painel das questões atuais
            </div>
          </div>
        </div>
        <div className="row" id="adminQuestionnaireButtonsRow">
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
          <div className="col s6 m6 l6" id="sendButtonCollumn">
            <center>
              <a
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="propositionButton"
              >
                <i className="material-icons right" id="sendButtonIcon">send</i>Enviar
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminQuestionnairePage;
