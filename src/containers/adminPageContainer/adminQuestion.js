import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AdminQuestion extends Component {

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
        Criar Questão
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="questionTitle" className="materialize-textarea" />
                <label htmlFor="questionTitle">Título</label>
              </div>
            </div>
          </form>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="questionSubTitle" className="materialize-textarea" />
                <label htmlFor="questionSubTitle">Subtítulo</label>
              </div>
            </div>
          </form>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="questionDescription" className="materialize-textarea" />
                <label htmlFor="questionDescription">Descrição</label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <a
            onClick={() => browserHistory.push('/admin')}
            className="waves-effect waves-light btn black yellow-text text-accent-3"
            id="backButton"
          >Voltar
          </a>
        </div>
      </div>
    );
  }
}

export default AdminQuestion;
