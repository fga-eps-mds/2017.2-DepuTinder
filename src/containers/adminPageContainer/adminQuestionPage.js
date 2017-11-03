import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AdminListPropositions from './adminListPropositions';

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
                <div className="card-content white accent-3">
                  <i className="material-icons activator right" id="cardHelpIcon">help</i>
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="input-field col s12" id="inputTitle">
                          <input id="questionTitle" type="text" data-length="50" />
                          <label htmlFor="questionTitle">Titulo</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12" id="inputSubtitle">
                          <input id="questionSubTitle" type="text" data-length="50" />
                          <label htmlFor="questionSubTitle">SubTitulo</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12" id="inputDescription">
                          <textarea id="questionDescription" className="materialize-textarea" data-length="120" />
                          <label htmlFor="questionDescription">Descrição</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-reveal" id="cardReveal">
                  <span id="cardRevealPropositionTitle" className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                  <p id="cardRevealPropositionParagraph">DÚVIDAS</p>
                  <div className="propositionAuthor">
                    <br /> 1)O que deve ser escrito nos campos?<br />
                    <br /> 2)Como selecionar uma proposicao?<br />
                    <br /> 2)Como salvar uma questao?<br />
                  </div>
                </div>
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
