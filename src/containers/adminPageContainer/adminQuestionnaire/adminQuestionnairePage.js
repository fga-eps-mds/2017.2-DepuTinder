import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AdminListQuestions from './adminListQuestions';
import AdminActualQuestionnaire from './adminActualQuestionnaire';
import AdminAddandRemoveQuestions from './adminAddandRemoveQuestions';

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
    this.state = { add: true, remove: false, list: false };
  }

  change(flag) {
    if (flag === 1) {
      this.setState({ list: true });
      this.setState({ add: false });
      this.setState({ remove: false });
    } else if (flag === 2) {
      this.setState({ list: false });
      this.setState({ add: true });
      this.setState({ remove: false });
    } else {
      this.setState({ list: false });
      this.setState({ add: false });
      this.setState({ remove: true });
    }
  }

  render() {
    const LIST = 1;
    const ADD = 2;
    const REMOVE = 3;

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
                          <li className="tab"><a className="purple-text active" onClick={() => { this.change(LIST); }}>Listar</a></li>
                          <li className="tab"><a className="active purple-text" onClick={() => { this.change(ADD); }}>Adicionar</a></li>
                          <li className="tab"><a className="active purple-text" onClick={() => { this.change(REMOVE); }}>Remover</a></li>
                        </ul>
                      </div>
                      <div className="card-content grey lighten-4">
                        {
                          this.state.list &&
                            <AdminActualQuestionnaire />
                        }
                        {
                          this.state.add &&
                          <AdminAddandRemoveQuestions />
                        }
                        {
                          this.state.remove &&
                          <AdminAddandRemoveQuestions />
                        }
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
                  className="waves-effect waves-light btn black purple-text text-accent-3"
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
                  className="waves-effect waves-light btn black purple-text text-accent-3"
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
