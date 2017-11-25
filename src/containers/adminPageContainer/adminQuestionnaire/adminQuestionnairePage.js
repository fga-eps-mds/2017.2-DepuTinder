import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AdminListQuestions from './adminListQuestions';
import AdminActualQuestionnaire from './adminActualQuestionnaire';
import AdminAddQuestions from './adminAddQuestions';

class AdminQuestionnairePage extends Component {

  static renderQuestionsList() {
    return (
      <div>
        <AdminListQuestions />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="adminQuestionnairePage">
        <div
          id="titleAdminQuestion"
        ><br />
        Criar Questionário
        </div>
        <br />
        <div className="row" id="AdminQuestionnaireCardsRow">
          <div
            className="col s12 m6"
            id="listAdminQuestions"
          >
            <center>
              <div className="card white">
                <div className="card-content black-text">
                  <span className="card-title">Questões Disponíveis</span>
                  <div className="scroll-box">
                    {AdminQuestionnairePage.renderQuestionsList()}
                  </div>
                </div>
              </div>
            </center>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <center>
                <div className="card white">
                  <div className="card-content black-text">
                    <span className="card-title">Editar Questionário</span>
                    <div className="scroll-box">
                      <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width">
                          <li className="tab"><a href="#test4">Observar</a></li>
                          <li className="tab"><a className="active" href="#test5">Adicionar</a></li>
                          <li className="tab"><a href="#test6">Remover</a></li>
                        </ul>
                      </div>
                      <div className="card-content grey lighten-4">
                        <div id="test4">
                          <AdminActualQuestionnaire />
                        </div>
                        <div id="test5">
                          <AdminAddQuestions />
                        </div>
                        <div id="test6">Test 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
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
                  onClick={() => browserHistory.push('/teste')}
                >
                  <i className="material-icons right" id="sendButtonIcon">send</i>Enviar
              </a>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminQuestionnairePage;
