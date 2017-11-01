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
          <div className="col s3">
            <br />
          </div>
          <div className="input-field inline col s6">
            <input id="questionTitle" type="title" className="validate" />
            <label htmlFor="questionTitle" data-error="wrong" data-success="right">
              Título
            </label>
          </div>
          <div className="input-field inline col s6">
            <input id="questionSubTitle" type="subtitle" className="validate" />
            <label htmlFor="questionSubTitle" data-error="wrong" data-success="right">
              Subtítulo
            </label>
          </div>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="questionDescription" className="materialize-textarea" />
                  <label htmlFor="questionDescription">Descrição</label>
                </div>
              </div>
            </form>
          </div>
          <div className="col s3">
            <br />
          </div>
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
